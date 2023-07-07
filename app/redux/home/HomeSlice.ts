import {
  ActionReducerMapBuilder,
  Draft,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit';
import { UserSchemaType, getUsersThunk } from '../../services';
import { RootState } from '../store';

export interface InitialHomeStateType {
  users: UserSchemaType[] | undefined;
  page: number;
  isLoading: boolean;
  searchText: string;
  error: string;
  searchedUsers: UserSchemaType[] | undefined;
}

const initialState: InitialHomeStateType = {
  users: undefined,
  page: 1,
  isLoading: false,
  error: '',
  searchedUsers: undefined,
  searchText: '',
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    increasePage: (state: Draft<InitialHomeStateType>) => {
      state.page += 1;
    },
    searchUser: (
      state: Draft<InitialHomeStateType>,
      action: PayloadAction<string>,
    ) => {
      state.searchText = action.payload;
      if (action.payload)
        state.searchedUsers = state.users?.filter(item =>
          item.first_name
            .concat(item.last_name)
            .toLowerCase()
            .includes(action.payload.toLowerCase()),
        );
      else state.searchedUsers = state.users;
    },
    addUser: (
      state: Draft<InitialHomeStateType>,
      action: PayloadAction<UserSchemaType>,
    ) => {
      if (state.users) {
        state.users = [action.payload, ...state.users];
        state.searchedUsers = [action.payload, ...state.users];
      }
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<InitialHomeStateType>) => {
    builder
      .addCase(getUsersThunk.pending, (state: Draft<InitialHomeStateType>) => {
        state.isLoading = true;
      })
      .addCase(
        getUsersThunk.fulfilled,
        (
          state: Draft<InitialHomeStateType>,
          action: PayloadAction<{
            users: UserSchemaType[] | undefined;
            page: number;
          }>,
        ) => {
          if (action.payload?.users?.length && state.users)
            state.users = [...state.users, ...action.payload.users];
          if (!state.users) {
            state.users = action.payload.users;
            state.searchedUsers = action.payload.users;
          }
          state.isLoading = false;
        },
      )
      .addCase(
        getUsersThunk.rejected,
        (
          state: Draft<InitialHomeStateType>,
          action: PayloadAction<unknown>,
        ) => {
          state.isLoading = false;
          state.error = action.payload as string;
        },
      );
  },
});

export const { searchUser, increasePage, addUser } = homeSlice.actions;
export default homeSlice.reducer;
export const homeSelector = (state: RootState) => state.home;
