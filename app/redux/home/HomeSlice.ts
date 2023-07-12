import {
    ActionReducerMapBuilder,
    Draft,
    PayloadAction,
    createSlice,
} from '@reduxjs/toolkit';
import { UserSchemaType, getUsersThunk } from '../../services';

export interface InitialHomeStateType {
  users: UserSchemaType[] | undefined;
  page: number;
  isLoading: boolean;
  error: string;
}

const initialState: InitialHomeStateType = {
  users: undefined,
  page: 1,
  isLoading: false,
  error: '',
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialHomeStateType>) => {
    builder
      .addCase(getUsersThunk.pending, (state: Draft<InitialHomeStateType>) => {
        state.isLoading = true;
      })
      .addCase(
        getUsersThunk.fulfilled,
        (
          state: Draft<InitialHomeStateType>,
          action: PayloadAction<UserSchemaType[]>,
        ) => {
          state.users = action.payload;
        },
      )
      .addCase(
        getUsersThunk.rejected,
        (state: Draft<InitialHomeStateType>, action: PayloadAction<unknown>) => {
          state.error = action.payload as string;
        },
      );
  },
});

export default homeSlice.reducer;
