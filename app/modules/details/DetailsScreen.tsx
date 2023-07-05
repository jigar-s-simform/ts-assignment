import { RouteProp, useRoute } from '@react-navigation/native';
import { Envelope, MessengerLogo, User } from 'phosphor-react-native';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { images } from '../../assets';
import { NavigationRoutes, Strings } from '../../constants';
import { HomeStackParamsList } from '../../navigation/NavigationTypes';
import { colors, moderateScale } from '../../theme';
import styles from './DetailsScreenStyles';
import useDetails from './useDetails';

type DetailScreenRouteProp = RouteProp<
  HomeStackParamsList,
  NavigationRoutes.DetailsScreen
>;

const DetailsScreen = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const { user: userDetails } = route.params;
  const {handleSendSms} = useDetails()

  return (
    <View style={styles.mainContainer}>
      <View style={styles.top}>
        <ImageBackground
          source={images.background}
          style={styles.backgroundImage}
          resizeMode="cover">
          <View style={styles.overlay} />
        </ImageBackground>

        <View style={styles.profileNameContainer}>
          <Image
            source={{uri: userDetails?.avatar}}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{userDetails.first_name}</Text>
            <Text style={styles.nameText}>{userDetails.last_name}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.detailItem}>
          <User size={moderateScale(28)} color={colors.themeBlueDark} />
          <Text style={styles.detailText}>{userDetails.first_name}</Text>
        </View>
        <View style={styles.detailItem}>
          <User size={moderateScale(28)} color={colors.themeBlueDark} />
          <Text style={styles.detailText}>{userDetails.last_name}</Text>
        </View>
        <View style={styles.detailItem}>
          <Envelope size={moderateScale(28)} color={colors.themeBlueDark} />
          <Text style={styles.detailText}>{userDetails.email}</Text>
        </View>
        <TouchableOpacity style={styles.detailItem} onPress={handleSendSms}>
          <MessengerLogo size={moderateScale(28)} color={colors.themeBlueDark} />
          <Text style={styles.detailText}>{Strings.phone}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;
