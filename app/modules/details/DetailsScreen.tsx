import { useRoute } from '@react-navigation/native';
import { Envelope, MessengerLogo, User } from 'phosphor-react-native';
import React, { FC } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../assets';
import { Strings } from '../../constants';
import { UserSchemaType } from '../../services';
import { Colors, moderateScale } from '../../theme';
import { DetailScreenRouteProp } from './DetailTypes';
import stylesheet from './DetailsScreenStyles';
import useDetails, { UseDetailsReturnType } from './useDetails';

const DetailsScreen: FC = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const { user: userDetails }: { user: UserSchemaType } = route.params;
  const { handleSendSms, theme, imageUrl }: UseDetailsReturnType =
    useDetails(userDetails);
  const styles = stylesheet(theme);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.top}>
        <ImageBackground
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="cover">
          <View style={styles.overlay} />
        </ImageBackground>
        <View style={styles.profileNameContainer}>
          <Image
            source={imageUrl}
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
          <User size={moderateScale(28)} color={Colors[theme].themeBlueDark} />
          <Text style={styles.detailText}>{userDetails.first_name}</Text>
        </View>
        <View style={styles.detailItem}>
          <User size={moderateScale(28)} color={Colors[theme].themeBlueDark} />
          <Text style={styles.detailText}>{userDetails.last_name}</Text>
        </View>
        <View style={styles.detailItem}>
          <Envelope
            size={moderateScale(28)}
            color={Colors[theme].themeBlueDark}
          />
          <Text style={styles.detailText}>{userDetails.email}</Text>
        </View>
        <TouchableOpacity style={styles.detailItem} onPress={handleSendSms}>
          <MessengerLogo
            size={moderateScale(28)}
            color={Colors[theme].themeBlueDark}
          />
          <Text style={styles.detailText}>{Strings.phone}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;
