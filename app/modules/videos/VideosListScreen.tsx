import React, { FC, useContext } from 'react';
import { FlatList, View } from 'react-native';
import { ThemeContext, ThemeType } from '../../context';
import { ListEmptyComponent } from '../home';
import VideoComponent from './VideoComponent';
import stylesheet from './VideoStyles';
import useVideos, { UseVideosReturnType } from './useVideos';

const VideosListScreen: FC = () => {
  const { videos, theme }: UseVideosReturnType = useVideos();
  const styles = stylesheet(theme as ThemeType);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={videos}
        keyExtractor={(_,index) => index.toString()} // we are using index because data does not provide any id or similar property to use here
        renderItem={({ item }) => <VideoComponent video={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

export default VideosListScreen;
