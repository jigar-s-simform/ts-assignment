import React from 'react';
import { FlatList, View } from 'react-native';
import VideoComponent from './VideoComponent';
import styles from './VideoStyles';
import useVideos from './useVideos';

const VideosListScreen = () => {
  const {videos} = useVideos();

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={videos}
        renderItem={({item, index}) => <VideoComponent video={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default VideosListScreen;
