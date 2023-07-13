import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {instance} from '../config';
import {AsyncLoginStatus, Strings} from '../constants';
import {
  LoginSchemaTypes,
  getLoginStatusFromAsyncStorage,
  saveToAsync,
} from '../utils';

export interface UserSchemaType {
  id: number | undefined;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string | undefined;
  password?: string;
}
interface AxiosResponseDataType {
  data: UserSchemaType[];
}

const loginThunk = createAsyncThunk(
  'loginUser',
  async (values: LoginSchemaTypes, thunkAPI) => {
    try {
      const loginStausFromAsync: string = await getLoginStatusFromAsyncStorage({
        email: values.email,
        password: values.password,
      });

      if (loginStausFromAsync === AsyncLoginStatus.invalidPassword) // if password invalid from AsyncStorage throw error invalid credentials
        throw Strings.invalidCredentials
      
      else if (loginStausFromAsync === AsyncLoginStatus.userNotFound) { // if user is not stored in Async Storage fetch from api and perform authorization
        const res = await instance.post('/login', {
          email: values.email,
          password: values.password,
        });

        if (res.status === 200) {
          try {
            const response: AxiosResponse<AxiosResponseDataType> =
              await instance.get('/users?page=1&per_page=20');
            const users = response?.data?.data;
            const userData = users.filter(
              user => user.email === values.email,
            )[0];

            await saveToAsync({   // saved logged in user to AsyncSorage
              ...userData,
              password: values.password,
            });

            return {
              ...userData,
              password: values.password,
            };
          } catch (e) {
            thunkAPI.rejectWithValue(Strings.someThingWentWrong);
          }
        }
      }
      
    } catch (e: unknown) {
      return thunkAPI.rejectWithValue(e instanceof Error ? e.message: Strings.someThingWentWrong);
    }
  },
);

export default loginThunk;
