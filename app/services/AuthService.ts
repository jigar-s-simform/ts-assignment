import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { instance } from '../config';
import { strings } from '../constants';
import { LoginSchemaTypes } from '../utils';

export interface UserSchemaType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface AxiosResponseDataType {
  data: UserSchemaType[];
}

const loginThunk = createAsyncThunk(
  'loginUser',
  async (values: LoginSchemaTypes, thunkAPI) => {
    try {
      const res = await instance.post('/login', {
        email: values.email,
        password: values.password,
      });
      if (res.status === 200) {
        try {
          const response: AxiosResponse<AxiosResponseDataType> =
            await instance.get('/users?page=1&per_page=20');
          const users = response?.data?.data;
          const userData = users.filter(user => user.email === values.email)[0];
          return userData;
        } catch (e) {
          thunkAPI.rejectWithValue(strings.someThingWentWrong);
        }
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(strings.someThingWentWrong);
    }
  },
);

export default loginThunk;
