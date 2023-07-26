import { FC } from 'react';
import { Text, View } from 'react-native';
import { Strings } from '../../constants';
import stylesheet from './HomeStyles';
import useHome, { UseHomeReturnType } from './useHome';

const ListEmptyComponent: FC = () => {
  const { theme }: UseHomeReturnType = useHome();
  const styles = stylesheet(theme);

  return (
    <View style={styles.searchEmptyContainer}>
      <Text style={styles.emptyComponentTextStyles}>{Strings.searchEmpty}</Text>
    </View>
  );
};

export default ListEmptyComponent;
