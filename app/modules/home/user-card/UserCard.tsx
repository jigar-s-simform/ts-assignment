import { EnvelopeSimple } from 'phosphor-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationRoutes } from '../../../constants';
import { UserSchemaType } from '../../../services';
import { Colors, moderateScale } from '../../../theme';
import { navigateWithParam } from '../../../utils';
import styles from './UserCardStyles';

const UserCard = ({item: user}: {item: UserSchemaType}) => {
  const handleOnPress = () => {
    navigateWithParam(NavigationRoutes.DetailsScreen, {user});
  };

  return (
    <>
      <TouchableOpacity style={styles.card} onPress={handleOnPress}>
        <View>
          <Image
            source={{
              uri: user.avatar,
            }}
            style={styles.profileImg}
          />
        </View>
        <View style={styles.cardRight}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{user.first_name}</Text>
            <Text style={styles.name}>{user.last_name}</Text>
          </View>
          <View style={styles.emailContainer}>
            <EnvelopeSimple size={moderateScale(20)} color={Colors.themeBlueDark} />
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default UserCard;
