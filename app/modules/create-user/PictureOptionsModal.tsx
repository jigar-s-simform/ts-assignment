import { Camera, FinnTheHuman, Image } from 'phosphor-react-native';
import React, { useContext } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { Strings, ThemeValues } from '../../constants';
import { ThemeContext, ThemeType } from '../../context';
import { Colors, moderateScale } from '../../theme';
import stylesheet from './CreateUserScreenStyles';

interface ModalPropsType {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  handleCameraSelect: () => Promise<void>;
  handleGallerySelect: () => Promise<void>;
}

const PictureOptionsModal = ({
  modalShown,
  setModalShown,
  handleCameraSelect,
  handleGallerySelect,
}: ModalPropsType) => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesheet(theme as ThemeType);

  const handleModalVisibility = (): void => {
    setModalShown(!modalShown);
  };
  const handleCamera = (): void => {
    handleCameraSelect();
  };

  const handleGallery = (): void => {
    handleGallerySelect();
  };

  return (
    <Modal visible={modalShown} transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalBottom}>
          <View style={styles.closeButtonContainer}>
            <Text style={styles.profileSelectionModalText}>
              {Strings.profilePictureModalText}
            </Text>
            <TouchableOpacity onPress={handleModalVisibility}>
              <Text style={styles.cancelBtnText}>{Strings.cancelBtn}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionItem} onPress={handleCamera}>
              <View style={styles.optionIcon}>
                <Camera
                  size={moderateScale(25)}
                  color={Colors[theme || ThemeValues.light]?.themeCyan}
                />
              </View>
              <Text style={styles.optionItemText}>{Strings.camera}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem} onPress={handleGallery}>
              <View style={styles.optionIcon}>
                <Image
                  size={moderateScale(25)}
                  color={Colors[theme || ThemeValues.light]?.themeCyan}
                />
              </View>
              <Text style={styles.optionItemText}>{Strings.gallery}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem}>
              <View style={styles.optionIcon}>
                <FinnTheHuman
                  size={moderateScale(25)}
                  color={Colors[theme || ThemeValues.light]?.themeCyan}
                />
              </View>
              <Text style={styles.optionItemText}>{Strings.avatar}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PictureOptionsModal;
