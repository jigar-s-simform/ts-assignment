import { FC, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CustomLoader, LoaderSizeType } from '../../components';
import { getUsersThunk } from '../../services';
import { colors } from '../../theme';
import styles from './HomeStyles';
import SearchComponent from './SearchComponent';
import useHome from './useHome';
import { UserCard } from './user-card';
import { Strings } from '../../constants';

const HomeScreen = () => {
  const {
    users,
    handleOnEndReached,
    search,
    searchedUsers,
    searchText,
    page,
    dispatch,
    isLoading
  } = useHome();

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
        ListFooterComponent={<CustomLoader size={LoaderSizeType.large} animating={isLoading} color={colors.themeBlue} />}
        ListEmptyComponent={EmptySearchComponent}
      />
    </View>
  );
};

export const EmptySearchComponent:FC = () => {
  
  return (
    <View style={styles.searchEmptyContainer}>
      <Text>{Strings.searchEmpty}</Text>
    </View>
  )
}


export default HomeScreen;
