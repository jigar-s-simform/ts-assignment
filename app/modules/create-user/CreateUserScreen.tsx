import { Camera } from 'phosphor-react-native';
import React, { FC, useState } from 'react';
import {
  GestureResponderEvent,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../assets';
import { CustomInput } from '../../components';
import { Strings, ThemeValues } from '../../constants';
import { Colors, globalMetrics, moderateScale, verticalScale } from '../../theme';
import { handleSubmitEdit } from '../../utils';
import stylesheet from './CreateUserScreenStyles';
import ProfileOptionsModal from './PictureOptionsModal';
import useCreate, { UseCreateReturnType } from './useCreate';

const CreateUserScreen: FC = () => {
  const [imagePath, setImagePath] = useState<string | number | undefined>(
    Images.defaultImg,
  );

  const {
    handleProfileSelect,
    formik,
    formRefs,
    modalShown,
    setModalShown,
    handleCameraSelect,
    handleGallerySelect,
    theme
  }: UseCreateReturnType = useCreate({imagePath, setImagePath});

  const styles = stylesheet(theme);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.top}>
        <View style={styles.profileImgContainer}>
          <Image
            source={
              typeof imagePath === 'number' ? imagePath : { uri: imagePath }
            }
            style={styles.profileImage}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.editIcon}
            onPress={handleProfileSelect}>
            <Camera
              size={moderateScale(25)}
              color={Colors[theme || ThemeValues.light]?.white}
            />
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView
        style={styles.bottomContainer}
        behavior={globalMetrics.isIos ? 'padding' : 'height'}
        keyboardVerticalOffset={verticalScale(15)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomInput
            editable
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
            editable
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
            editable
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
            editable
            onBlur={formik.handleBlur(Strings.formInputNames.password)}
            ref={ref => (formRefs.current[3] = ref)}
            name={Strings.formInputNames.password}
            onChangeText={formik.handleChange(Strings.formInputNames.password)}
            onSubmitEditing={() => handleSubmitEdit(formRefs, 3)}
            returnKeyType="done"
            defaultValue={formik.values.password}
            touched={formik.touched.password}
            error={formik.errors.password}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.addUserButton}
        onPress={formik.handleSubmit as (e?: GestureResponderEvent) => void}>
        <Text style={styles.addUserText}>{Strings.addUser}</Text>
      </TouchableOpacity>
      {modalShown && (
        <ProfileOptionsModal
          modalShown={modalShown}
          setModalShown={setModalShown}
          handleCameraSelect={handleCameraSelect}
          handleGallerySelect={handleGallerySelect}
        />
      )}
    </View>
  );
};

export default CreateUserScreen;
