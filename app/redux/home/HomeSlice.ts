import {
    ActionReducerMapBuilder,
    Draft,
    PayloadAction,
    createSlice,
} from '@reduxjs/toolkit';
import { UserSchemaType, getUsersThunk } from '../../services';

interface InitialStateType {
  users: UserSchemaType[] | undefined;
  page: number;
  isLoading: boolean;
  error: string;
}

const initialState: InitialStateType = {
  users: undefined,
  page: 1,
  isLoading: false,
  error: '',
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialStateType>) => {
    builder
      .addCase(getUsersThunk.pending, (state: Draft<InitialStateType>) => {
        state.isLoading = true;
      })
      .addCase(
        getUsersThunk.fulfilled,
        (
          state: Draft<InitialStateType>,
          action: PayloadAction<UserSchemaType[]>,
        ) => {
          state.users = action.payload;
        },
      )
      .addCase(
        getUsersThunk.rejected,
        (state: Draft<InitialStateType>, action: PayloadAction<unknown>) => {
          state.error = action.payload as string;
        },
      );
  },
});

export default homeSlice.reducer;
