import { authSelector, useAppSelector } from '../../redux';
import { UserSchemaType } from '../../services';

/**
 * @description custom hook for implementing business logic
 * 
 * @returns {Object} containing user details
 */

export interface UseProfileReturnType {
  userDetails: UserSchemaType | undefined
}

const useProfile = ():UseProfileReturnType => {
  const {userDetails} = useAppSelector(authSelector);

  return {
    userDetails,
  };
};

export default useProfile;
