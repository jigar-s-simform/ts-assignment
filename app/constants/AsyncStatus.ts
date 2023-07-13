export const AsyncLoginStatus: Readonly<{
  success: 'LOGIN_SUCCESS';
  invalidPassword: 'PASSWORD_INVALID';
  userNotFound: 'USER_NOT_FOUND';
  saveError: 'USER_NOT_SAVED';
}> = Object.freeze({
  success: 'LOGIN_SUCCESS',
  invalidPassword: 'PASSWORD_INVALID',
  userNotFound: 'USER_NOT_FOUND',
  saveError: 'USER_NOT_SAVED',
});

export const AsyncUpdateStatus: Readonly<{
  success: 'PASSWORD_CHANGE_SUCCESSFULL';
  error: 'ERROR_WHILE_CHANGING_PASSWORD';
}> = Object.freeze({
  success: 'PASSWORD_CHANGE_SUCCESSFULL',
  error: 'ERROR_WHILE_CHANGING_PASSWORD',
});
