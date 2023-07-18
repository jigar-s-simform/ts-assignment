import {
  ActionReducerMapBuilder,
  createSlice,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit';
import {loginThunk, UserSchemaType} from '../../services';
import {RootState} from '../store';
import {NotificationType} from '../../types';

export interface InitialAuthStateType {
  loginSuccess: boolean;
  userDetails: UserSchemaType | undefined;
  isLoading: boolean;
  error: string;
  notifications: NotificationType[];
}

const initialState: InitialAuthStateType = {
  loginSuccess: false,
  userDetails: undefined,
  isLoading: false,
  error: '',
  notifications: [],
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    clearError: (state: Draft<InitialAuthStateType>) => {
      state.error = '';
    },
    changePassword: (
      state: Draft<InitialAuthStateType>,
      action: PayloadAction<string>,
    ) => {
      if (state.userDetails) {
        state.userDetails = {
          ...state.userDetails,
          password: action.payload,
        };
      }
    },
    logout: (state: Draft<InitialAuthStateType>) => {
      state.loginSuccess = false;
    },
    setProfilePicture: (
      state: Draft<InitialAuthStateType>,
      action: PayloadAction<string | undefined>,
    ) => {
      state.userDetails = {
        ...state.userDetails,
        avatar: action.payload,
      } as UserSchemaType;
    },
    saveProfileChanges: (
      state: Draft<InitialAuthStateType>,
      action: PayloadAction<UserSchemaType>,
    ) => {
      state.userDetails = action.payload;
    },
    addNotification: (
      state: Draft<InitialAuthStateType>,
      action: PayloadAction<NotificationType>,
    ) => {
      state.notifications = [action.payload, ...state.notifications];
    },
    deleteNotification: (
      state: Draft<InitialAuthStateType>,
      action: PayloadAction<NotificationType>,
    ) => {
      state.notifications = state.notifications.filter(
        notification => notification.messageId !== action.payload.messageId,
      );
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<InitialAuthStateType>) => {
    builder
      .addCase(loginThunk.pending, (state: Draft<InitialAuthStateType>) => {
        state.isLoading = true;
      })
      .addCase(
        loginThunk.fulfilled,
        (
          state: Draft<InitialAuthStateType>,
          action: PayloadAction<UserSchemaType | undefined>,
        ) => {
          state.loginSuccess = true;
          state.userDetails = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(
        loginThunk.rejected,
        (
          state: Draft<InitialAuthStateType>,
          action: PayloadAction<unknown>,
        ) => {
          state.error = action.payload as string;
          state.isLoading = false; // typecasting to string because from rejectWithValue we are returning string
        },
      );
  },
});

export const {
  clearError,
  setProfilePicture,
  saveProfileChanges,
  logout,
  changePassword,
  addNotification,
  deleteNotification
} = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
