import * as yup from 'yup';
import { Strings } from '../constants';

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(Strings.yupErrors.passwordEmpty),
});

export const signUpSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(Strings.yupErrors.passwordEmpty),
});

export const userDetailsSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
});

export const passwordUpdateSchema = yup.object({
  currentPassword: yup.string().min(8).required(Strings.yupErrors.passwordEmpty),
  newPassword:yup.string().min(8).required(Strings.yupErrors.passwordEmpty),
  confirmNewPassword: yup.string().min(8).required(Strings.yupErrors.passwordEmpty)
})

export interface LoginSchemaTypes {
  email: string;
  password: string;
}

export interface SignUpSchemaTypes extends LoginSchemaTypes {
  firstName: string;
  lastName: string;
}

export interface PasswordUpdateSchemaTypes {
  currentPassword: string
  newPassword: string
  confirmNewPassword: string
}
