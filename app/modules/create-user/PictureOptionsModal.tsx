import {Camera, FinnTheHuman, Image} from 'phosphor-react-native';
import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {Strings} from '../../constants';
import {moderateScale} from '../../theme';
import styles from './CreateUserScreenStyles';

interface ModalPropsType {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const PictureOptionsModal = ({modalShown, setModalShown}: ModalPropsType) => {
  const handleModalVisibility = () => {
    setModalShown(!modalShown);
  };

  return (
    <Modal visible={modalShown} transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalBottom}>
          <View style={styles.closeButtonContainer}>
            <Text style={styles.profileSelectionModalText}>{Strings.profilePictureModalText}</Text>
            <TouchableOpacity onPress={handleModalVisibility}>
              <Text style={styles.cancelBtnText}>{Strings.cancelBtn}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionItem}>
              <View style={styles.optionIcon}>
                <Camera size={moderateScale(25)} />
              </View>
              <Text>{Strings.camera}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem}>
              <View style={styles.optionIcon}>
                <Image size={moderateScale(25)} />
              </View>
              <Text>{Strings.gallery}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem}>
              <View style={styles.optionIcon}>
                <FinnTheHuman size={moderateScale(25)} />
              </View>
              <Text>{Strings.avatar}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PictureOptionsModal;
