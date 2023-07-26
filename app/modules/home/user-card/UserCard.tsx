import { EnvelopeSimple } from 'phosphor-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Images } from '../../../assets';
import { NavigationRoutes, ThemeValues } from '../../../constants';
import { UserSchemaType } from '../../../services';
import { Colors, moderateScale } from '../../../theme';
import { navigateWithParam } from '../../../utils';
import useHome, { UseHomeReturnType } from '../useHome';
import stylesheet from './UserCardStyles';

const UserCard = ({ item: user }: { item: UserSchemaType }) => {

  const handleOnPress = (): void => {
    navigateWithParam(NavigationRoutes.DetailsScreen, { user });
  };

  const { theme }: UseHomeReturnType = useHome();
  const styles = stylesheet(theme);

  return (
    <>
      <TouchableOpacity style={styles.card} onPress={handleOnPress}>
        <View>
          <Image
            source={
              user.avatar && typeof user.avatar === 'string'
                ? { uri: user.avatar }
                : Images.defaultImg
            }
            style={styles.profileImg}
          />
        </View>
        <View style={styles.cardRight}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{user.first_name}</Text>
            <Text style={styles.name}>{user.last_name}</Text>
          </View>
          <View style={styles.emailContainer}>
            <EnvelopeSimple
              size={moderateScale(20)}
              color={Colors[theme || ThemeValues.light]?.themeCyan}
            />
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default UserCard;
