import { AnyAction, EmptyObject, ThunkDispatch } from '@reduxjs/toolkit';
import { useRef } from 'react';
import { ColorSchemeName, TextInput, useColorScheme } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { StorageConstants, Strings } from '../../constants';
import {
  InitialAuthStateType,
  InitialHomeStateType,
  homeSelector,
  increasePage,
  searchUser,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { ThemeType, UserSchemaType, mmkvStorage } from '../../services';
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
  theme: ThemeType,
  inputRef: React.RefObject<TextInput>
  clearInput: () => void
}

const useHome = (): UseHomeReturnType => {
  const dispatch = useAppDispatch();
  const appearance: ColorSchemeName = useColorScheme()
  const [mmkvTheme] = useMMKVString(StorageConstants.themeStorageKey, mmkvStorage);
  const inputRef = useRef<TextInput>(null);

  const { users, searchedUsers, searchText, isLoading, page } =
    useAppSelector(homeSelector);

  const handleOnEndReached: FunctionType = (text: string | undefined) => {
    if (!text) dispatch(increasePage());
  };

  const search: FunctionType = (text: string) => {
    dispatch(searchUser(text));
  };

  // clears search input
  const clearInput = (): void => {
    inputRef.current?.clear();
    dispatch(searchUser(Strings.emptyString));
    inputRef.current?.blur();
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
    theme: (mmkvTheme ?? appearance) as ThemeType,
    inputRef,
    clearInput
  };
};

export default useHome;
