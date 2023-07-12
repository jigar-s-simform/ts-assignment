import { AnyAction, EmptyObject, ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import {
  InitialAuthStateType,
  InitialHomeStateType,
  homeSelector,
  increasePage,
  searchUser,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { UserSchemaType, getUsersThunk } from '../../services';
export interface FunctionType {
  (item: string): void;
}

export interface UseHomeReturnType {
  users: UserSchemaType[] | undefined;
  searchedUsers: UserSchemaType[] | undefined;
  handleOnEndReached: FunctionType;
  search: FunctionType;
  searchText: string;
  isLoading: boolean;
  page: number;
  dispatch: ThunkDispatch<
    EmptyObject & {
      auth: InitialAuthStateType;
      home: InitialHomeStateType;
    } & PersistPartial,
    undefined,
    AnyAction
  >;
}

const useHome = (): UseHomeReturnType => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersThunk(1));
  }, []);

  const {users, searchedUsers, searchText, isLoading, page} =
    useAppSelector(homeSelector);

  const handleOnEndReached: FunctionType = text => {
    if (!text) dispatch(increasePage());
  };

  const search: FunctionType = text => {
    dispatch(searchUser(text));
  };

  return {
    users,
    searchedUsers,
    handleOnEndReached,
    search,
    searchText,
    isLoading,
    page,
    dispatch,
  };
};

export default useHome;
