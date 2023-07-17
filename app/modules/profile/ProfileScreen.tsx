import { Camera } from 'phosphor-react-native';
import { FC, useContext } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Images } from '../../assets';
import { CustomInput } from '../../components';
import { Strings, ThemeValues } from '../../constants';
import { ThemeContext } from '../../context';
import { useInitializeRefs } from '../../hooks';
import { Colors, moderateScale } from '../../theme';
import { handleSubmitEdit } from '../../utils';
import stylesheet from './ProfileScreenStyles';
import useProfile from './useProfile';

/**
 * @description Profile screen component that will show the profile details of the user
 *
 * @returns {JSX.Element}
 */
const ProfileScreen: FC = () => {
  const {
    userDetails,
    formik,
    editable,
    handleEditOrSave,
    handleEditProfilePicture,
  } = useProfile();
  const formRefs = useInitializeRefs(4);
  const { theme } = useContext(ThemeContext);
  const styles = stylesheet(theme);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.top}>
        <View style={styles.profileImgContainer}>
          <Image
            source={
              typeof userDetails?.avatar === 'string'
                ? {uri: userDetails?.avatar}
                : Images.defaultImg
            }
            style={styles.profileImage}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.editIcon}
            onPress={handleEditProfilePicture}>
            <Camera
              size={moderateScale(25)}
              color={Colors[theme]?.white}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <CustomInput
          editable={editable}
          onBlur={formik.handleBlur(Strings.formInputNames.email)}
          ref={ref => (formRefs.current[0] = ref)}
          name={Strings.formInputNames.email}
          onChangeText={formik.handleChange(Strings.formInputNames.email)}
          onSubmitEditing={() => handleSubmitEdit(formRefs, 0)}
          returnKeyType="next"
          defaultValue={formik.values.email}
          touched={formik.touched.email}
          error={formik.errors.email}
        />
        <CustomInput
          editable={editable}
          onBlur={formik.handleBlur(Strings.formInputNames.firstName)}
          ref={ref => (formRefs.current[1] = ref)}
          name={Strings.formInputNames.firstName}
          onChangeText={formik.handleChange(Strings.formInputNames.firstName)}
          onSubmitEditing={() => handleSubmitEdit(formRefs, 1)}
          returnKeyType="next"
          defaultValue={formik.values.firstName}
          touched={formik.touched.firstName}
          error={formik.errors.firstName}
        />
        <CustomInput
          editable={editable}
          onBlur={formik.handleBlur(Strings.formInputNames.lastName)}
          ref={ref => (formRefs.current[2] = ref)}
          name={Strings.formInputNames.lastName}
          onChangeText={formik.handleChange(Strings.formInputNames.lastName)}
          onSubmitEditing={() => handleSubmitEdit(formRefs, 2)}
          returnKeyType="next"
          defaultValue={formik.values.lastName}
          touched={formik.touched.lastName}
          error={formik.errors.lastName}
        />
        <CustomInput
          editable={editable}
          onBlur={formik.handleBlur(Strings.formInputNames.password)}
          ref={ref => (formRefs.current[3] = ref)}
          name={Strings.formInputNames.password}
          onChangeText={formik.handleChange(Strings.formInputNames.password)}
          onSubmitEditing={() => handleSubmitEdit(formRefs, 2)}
          returnKeyType="done"
          defaultValue={formik.values.password}
          touched={formik.touched.password}
          error={formik.errors.password}
        />
      </View>
      <TouchableOpacity
        style={styles.editProfileButton}
        onPress={handleEditOrSave}>
        <Text style={styles.editProfileText}>
          {!editable ? Strings.editProfile : Strings.saveChanges}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
