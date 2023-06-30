import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { instance } from '../config';
import { strings } from '../constants';
import { UserSchemaType } from './AuthService';

export interface UsersResponseType {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserSchemaType[];
  support: {
    url: string;
    text: string;
  };
}

const getUsersThunk = createAsyncThunk(
  strings.home,
  async (arg: number, {rejectWithValue}) => {
    try {
      const res: AxiosResponse<UsersResponseType> = await instance.get(
        '/users',
        {
          params: {
            page: arg,
          },
        },
      );
      return res?.data?.data;
    } catch (e) {
      return rejectWithValue(strings.someThingWentWrong);
    }
  },
);

export default getUsersThunk;
