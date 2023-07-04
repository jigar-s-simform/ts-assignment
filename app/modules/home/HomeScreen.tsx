import { useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { getUsersThunk } from '../../services';
import { colors } from '../../theme';
import styles from './HomeStyles';
import SearchComponent from './SearchComponent';
import useHome from './useHome';
import { UserCard } from './user-card';

const HomeScreen = () => {
  const {
    users,
    handleOnEndReached,
    search,
    searchedUsers,
    searchText,
    page,
    dispatch,
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
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={() => handleOnEndReached(searchText)}
        onEndReachedThreshold={0}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

const ListFooterComponent = () => {
  const { isLoading } = useHome();
  
  return (
    <ActivityIndicator
      animating={isLoading}
      size="large"
      color={colors.themeBlue}
    />
  );
};

export default HomeScreen;
