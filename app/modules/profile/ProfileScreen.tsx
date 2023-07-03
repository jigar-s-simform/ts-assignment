import { Camera } from 'phosphor-react-native';
import { Image, TouchableOpacity, View } from 'react-native';
import { Colors, moderateScale } from '../../theme';
import styles from './ProfileScreenStyles';
import useProfile, { UseProfileReturnType } from './useProfile';
import { FC } from 'react';

/**
 * @description Profile screen component that will show the profile details of the user
 * 
 * @returns {JSX.Element}
 */
const ProfileScreen:FC = () => {
  const { userDetails }:UseProfileReturnType = useProfile();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.top}>
        <View style={styles.profileImgContainer}>
          <Image
            source={{ uri: userDetails?.avatar }}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.editIcon}>
            <Camera size={moderateScale(30)} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
