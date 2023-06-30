import * as yup from 'yup';
import { strings } from '../constants';

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(strings.yupErrors.passwordEmpty),
});

export const signUpSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(strings.yupErrors.passwordEmpty),
});

export const userDetailsSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
});

export interface LoginSchemaTypes {
  email: string;
  password: string;
}

export interface SignUpSchemaTypes extends LoginSchemaTypes {
  firstName: string;
  lastName: string;
}
