import { authSelector, useAppSelector } from '../../redux';

/**
 * @description custom hook for implementing business logic
 * 
 * @returns {Object} containing user details
 */
const useProfile = () => {
  const {userDetails} = useAppSelector(authSelector);

  return {
    userDetails,
  };
};

export default useProfile;
