import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { instance } from '../config';
import { Strings, allUsers, loginBase, loginThunkName } from '../constants';
import { LoginSchemaTypes } from '../utils';

export interface UserSchemaType {
  id: number | undefined;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string | number | undefined;
  password?:string
}
interface AxiosResponseDataType {
  data: UserSchemaType[];
}

const loginThunk = createAsyncThunk(
  loginThunkName,
  async (values: LoginSchemaTypes, thunkAPI) => {
    try {
      const res = await instance.post(loginBase, {
        email: values.email,
        password: values.password,
      });
      if (res.status === 200) {
        try {
          const response: AxiosResponse<AxiosResponseDataType> =
            await instance.get(allUsers);
          const users = response?.data?.data;
          const userData = users.filter(user => user.email === values.email)[0];
          return {
            ...userData,
            password: values.password
          };
        } catch (e) {
          thunkAPI.rejectWithValue(Strings.someThingWentWrong);
        }
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(Strings.someThingWentWrong);
    }
  },
);

export default loginThunk;
