import React from 'react';
import { FlatList, View } from 'react-native';
import { UserSchemaType } from '../../services';
import styles from './HomeStyles';
import useHome from './useHome';
import { UserCard } from './user-card';

const HomeScreen = () => {

  const { users } = useHome();

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => <UserCard item={item} />}
        keyExtractor={(item: UserSchemaType) => item.id.toString()}
        bounces={false}
      />
    </View>
  );
};

export default HomeScreen;
