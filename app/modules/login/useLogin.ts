import { useFormik } from 'formik';
import { useState } from 'react';
import { useInitializationRef } from '../../hooks';
import { LoginSchemaTypes, loginSchema } from '../../utils';

/**
 * useLogin Hook
 *
 * @description This hook provides the login functionality and handles the login process.
 *
 * @returns {Object} An object containing the formik object, loginStatus, formRefs, and navigation.
 */
const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRefs = useInitializationRef(2);
  const formik = useFormik<LoginSchemaTypes>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async function (values) {
      // to be completed in next pull request with redux and navigation
    },
  });

  return {
    isLoading,
    setIsLoading,
    formRefs,
    formik,
  };
};

export default useLogin;
