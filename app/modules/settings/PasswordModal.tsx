import React, { SetStateAction } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CustomInput } from '../../components';
import { Strings } from '../../constants';
import { ThemeType } from '../../context';
import { useInitializationRef } from '../../hooks';
import { globalMetrics } from '../../theme';
import { handleSubmitEdit } from '../../utils';
import stylesheet from './SettingsStyles';
import useSettings, { UseSettingsReturnType } from './useSettings';

interface PasswordModalPropsType {
  modalShown: boolean;
  setModalShown: React.Dispatch<SetStateAction<boolean>>;
}

const PasswordModal = ({
  modalShown,
  setModalShown,
}: PasswordModalPropsType): JSX.Element => {
  const formRefs: React.MutableRefObject<any[]> = useInitializationRef(3);
  const { formik, theme }: UseSettingsReturnType = useSettings(setModalShown);

  const styles = stylesheet(theme as ThemeType);

  const handlePasswordChange = (): void => {
    formik.handleSubmit();
  };

  const handleCancel = (): void => {
    setModalShown(false);
  };

  return (
    <Modal visible={modalShown}>
      <KeyboardAvoidingView
        style={styles.mainModalContainer}
        behavior={globalMetrics.isIos ? 'padding' : 'height'}>
        <View style={styles.modalInputButtonContainer}>
          <Text style={styles.editPasswordLabel}>{Strings.edit}</Text>
          <View style={styles.passwordItemContainer}>
            <Text style={styles.passwordItemText}>
              {Strings.currentPassword}
            </Text>
            <CustomInput
              editable
              onBlur={formik.handleBlur(Strings.formInputNames.currentPassword)}
              name={Strings.formInputNames.currentPassword}
              ref={ref => (formRefs.current[1] = ref)}
              onChangeText={formik.handleChange(
                Strings.formInputNames.currentPassword,
              )}
              onSubmitEditing={() => handleSubmitEdit(formRefs, 0)}
              returnKeyType="next"
              touched={formik.touched.currentPassword}
              error={formik.errors.currentPassword}
              defaultValue={formik.values.currentPassword}
            />
          </View>
          <View style={styles.passwordItemContainer}>
            <Text style={styles.passwordItemText}>{Strings.newPassword}</Text>
            <CustomInput
              editable
              onBlur={formik.handleBlur(Strings.formInputNames.newPassword)}
              name={Strings.formInputNames.newPassword}
              ref={ref => (formRefs.current[1] = ref)}
              onChangeText={formik.handleChange(
                Strings.formInputNames.newPassword,
              )}
              onSubmitEditing={() => handleSubmitEdit(formRefs, 1)}
              returnKeyType="next"
              touched={formik.touched.newPassword}
              error={formik.errors.newPassword}
              defaultValue={formik.values.newPassword}
            />
          </View>
          <View style={styles.passwordItemContainer}>
            <Text style={styles.passwordItemText}>
              {Strings.confirmNewPassword}
            </Text>
            <CustomInput
              editable
              onBlur={formik.handleBlur(
                Strings.formInputNames.confirmNewPassword,
              )}
              name={Strings.formInputNames.confirmNewPassword}
              ref={ref => (formRefs.current[2] = ref)}
              onChangeText={formik.handleChange(
                Strings.formInputNames.confirmNewPassword,
              )}
              onSubmitEditing={() => handleSubmitEdit(formRefs, 2)}
              returnKeyType="done"
              touched={formik.touched.confirmNewPassword}
              error={formik.errors.confirmNewPassword}
              defaultValue={formik.values.confirmNewPassword}
            />
          </View>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={handlePasswordChange}>
              <Text style={styles.editButtonText}>{Strings.saveChanges}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButtonStyles}
              onPress={handleCancel}>
              <Text style={styles.editButtonText}>{Strings.cancelBtn}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default PasswordModal;
