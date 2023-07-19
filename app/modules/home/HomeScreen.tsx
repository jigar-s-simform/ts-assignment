import { FC, useContext, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CustomLoader, LoaderSizeType } from '../../components';
import { Strings, ThemeValues } from '../../constants';
import { ThemeContext, ThemeType } from '../../context';
import { getUsersThunk } from '../../services';
import { Colors } from '../../theme';
import stylesheet from './HomeStyles';
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
  }: UseHomeReturnType = useHome();

  const { theme } = useContext(ThemeContext);

  const styles = stylesheet(theme as ThemeType);

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
            color={Colors[theme || ThemeValues.light]?.themeBlueDark}
          />
        }
        ListEmptyComponent={EmptySearchComponent}
      />
    </View>
  );
};

export const EmptySearchComponent: FC = () => {
  const { theme } = useContext(ThemeContext);
  const styles = stylesheet(theme as ThemeType);

  return (
    <View style={styles.searchEmptyContainer}>
      <Text style={styles.emptyComponentTextStyles}>{Strings.searchEmpty}</Text>
    </View>
  );
};

export default HomeScreen;
