import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Strings } from '../../../constants';
import { UserSchemaType } from '../../../services';
import styles from './UserCardStyles';

const UserCard = ({ item: user }: { item: UserSchemaType }) => {
  
  return (
    <>
      <TouchableOpacity style={styles.card}>
        <View>
          <Image
            source={{
              uri: (user.avatar),
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
            <Text>{Strings.formInputNames.email}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteBtnStyles}>
        <Text>{Strings.cancelBtn}</Text>
      </TouchableOpacity>
    </>
  );
};

export default UserCard;
