import React, { FC } from 'react';
import { Text } from 'react-native';
import { Strings } from '../../constants';

const ProfileScreen: FC = () => (
  <Text>{Strings.bottomNavigationTitles.profile}</Text>
);

export default ProfileScreen;
