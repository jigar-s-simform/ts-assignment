import { FC, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CustomLoader, LoaderSizeType } from '../../components';
import { getUsersThunk } from '../../services';
import { Colors } from '../../theme';
import styles from './HomeStyles';
import SearchComponent from './SearchComponent';
import useHome, { UseHomeReturnType } from './useHome';
import { UserCard } from './user-card';
import { Strings } from '../../constants';

const HomeScreen:FC = () => {
  const {
    users,
    handleOnEndReached,
    search,
    searchedUsers,
    searchText,
    page,
    dispatch,
    isLoading
  }:UseHomeReturnType = useHome();

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
        ListFooterComponent={<CustomLoader size={LoaderSizeType.large} animating={isLoading} color={Colors.themeBlue} />}
        ListEmptyComponent={EmptySearchComponent}
      />
    </View>
  );
};

const EmptySearchComponent:FC = () => {
  
  return (
    <View style={styles.searchEmptyContainer}>
      <Text>{Strings.searchEmpty}</Text>
    </View>
  )
}

export default HomeScreen;
