import {
  ActionReducerMapBuilder,
  createSlice,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit';
import { loginThunk, UserSchemaType } from '../../services';
import { RootState } from '../store';

interface InitialStateType {
  loginSuccess: boolean;
  userDetails: UserSchemaType | undefined;
  isLoading: boolean;
  error: string;
}

const initialState: InitialStateType = {
  loginSuccess: false,
  userDetails: undefined,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    clearError: (state: Draft<InitialStateType>) => {
      state.error = '';
    },
    setProfilePicture: (state: Draft<InitialStateType>, action: PayloadAction<string | undefined>) => {
      state.userDetails = {
        ...state.userDetails,
        avatar:action.payload
      } as UserSchemaType
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<InitialStateType>) => {
    builder
      .addCase(loginThunk.pending, (state: Draft<InitialStateType>) => {
        state.isLoading = true;
      })
      .addCase(
        loginThunk.fulfilled,
        (
          state: Draft<InitialStateType>,
          action: PayloadAction<UserSchemaType | undefined>,
        ) => {
          state.loginSuccess = true;
          state.userDetails = action.payload;
        },
      )
      .addCase(
        loginThunk.rejected,
        (state: Draft<InitialStateType>, action: PayloadAction<unknown>) => {
          state.error = action.payload as string; // typecasting to string because from rejectWithValue we are returning string
        },
      );
  },
});

export const { clearError, setProfilePicture } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
