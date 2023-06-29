import React, { FC } from 'react';
import { Text } from 'react-native';
import { Strings } from '../../constants';

const VideosListScreen:FC = () => (
  <Text>{Strings.bottomNavigationTitles.videos}</Text>
);

export default VideosListScreen;
