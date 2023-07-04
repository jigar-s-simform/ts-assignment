import {
  homeSelector,
  increasePage,
  searchUser,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
export interface FunctionType {
  (item: string): void;
}

const useHome = () => {
  const dispatch = useAppDispatch();
  const {users, searchedUsers, searchText, isLoading, page} =
    useAppSelector(homeSelector);

  const handleOnEndReached: FunctionType = (text) => {
    if(!text)
    dispatch(increasePage());
  };

  const search: FunctionType = text => {
    dispatch(searchUser(text));
  };

  return {
    users,
    searchedUsers,
    handleOnEndReached,
    search,
    searchText,
    isLoading,
    page,
    dispatch,
  };
};

export default useHome;
