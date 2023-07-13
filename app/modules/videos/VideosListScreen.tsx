import React from 'react';
import { FlatList, View } from 'react-native';
import VideoComponent from './VideoComponent';
import styles from './VideoStyles';
import useVideos, { UseVideoReturnType } from './useVideos';


const VideosListScreen = (): JSX.Element => {
  const { videos }: UseVideoReturnType = useVideos();

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={videos}
        keyExtractor={(_,index) => index.toString()} // we are using index because data does not provide any id or similar property to use here
        renderItem={({ item }) => <VideoComponent video={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default VideosListScreen;
