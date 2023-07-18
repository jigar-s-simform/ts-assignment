import {
  ActionReducerMapBuilder,
  createSlice,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit';
import { loginThunk, UserSchemaType } from '../../services';
import { RootState } from '../store';

export interface InitialAuthStateType {
  loginSuccess: boolean;
  userDetails: UserSchemaType | undefined;
  isLoading: boolean;
  error: string;
}

const initialState: InitialAuthStateType = {
  loginSuccess: false,
  userDetails: undefined,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    clearError: (state: Draft<InitialAuthStateType>) => {
      state.error = '';
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
        (state: Draft<InitialAuthStateType>, action: PayloadAction<unknown>) => {
          state.error = action.payload as string; // typecasting to string because from rejectWithValue we are returning string
          state.isLoading=false
        },
      );
  },
});

export const {clearError, setProfilePicture, saveProfileChanges,logout} =
  authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
