import { FC, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { CustomLoader, LoaderSizeType } from '../../components';
import { getUsersThunk } from '../../services';
import { Colors } from '../../theme';
import stylesheet from './HomeStyles';
import ListEmptyComponent from './ListEmptyComponent';
import SearchComponent from './SearchComponent';
import useHome, { UseHomeReturnType } from './useHome';
import { UserCard } from './user-card';

const HomeScreen: FC = () => {
  const {
    users,
    handleOnEndReached,
    search,
    searchedUsers,
    searchText,
    page,
    dispatch,
    isLoading,
    theme
  }: UseHomeReturnType = useHome();

  const styles = stylesheet(theme);

  useEffect(() => {
    dispatch(getUsersThunk(page));
  }, [page]);

  return (
    <View style={styles.container}>
      <SearchComponent search={search} />
      <FlatList
        data={searchText ? searchedUsers : users}
        renderItem={({item}) => <UserCard item={item} />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={() => handleOnEndReached(searchText)}
        onEndReachedThreshold={0}
        ListFooterComponent={
          <CustomLoader
            size={LoaderSizeType.large}
            animating={isLoading}
            color={Colors[theme].themeBlueDark}
          />
        }
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

export default HomeScreen;
