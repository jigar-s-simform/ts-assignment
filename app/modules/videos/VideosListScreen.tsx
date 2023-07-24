import React, { FC, useContext } from 'react';
import { FlatList, View } from 'react-native';
import { ThemeContext, ThemeType } from '../../context';
import { EmptySearchComponent } from '../home/HomeScreen';
import VideoComponent from './VideoComponent';
import stylesheet from './VideoStyles';
import useVideos, { UseVideosReturnType } from './useVideos';

const VideosListScreen: FC = () => {
  const { videos }: UseVideosReturnType = useVideos();
  const { theme } = useContext(ThemeContext);
  const styles = stylesheet(theme as ThemeType);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        inverted={true}
        data={videos}
        keyExtractor={(_,index) => index.toString()} // we are using index because data does not provide any id or similar property to use here
        renderItem={({ item }) => <VideoComponent video={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default VideosListScreen;
