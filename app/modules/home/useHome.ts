import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { getUsersThunk } from '../../services';

const useHome = () => {
  const dispatch = useAppDispatch();
  const {users} = useAppSelector(state => state.home);
  useEffect(() => {
    dispatch(getUsersThunk(1));
  }, []);

  return {
    users,
  };
};

export default useHome;
