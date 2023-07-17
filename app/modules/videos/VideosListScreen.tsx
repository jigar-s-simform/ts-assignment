import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { ThemeContext, ThemeType } from '../../context';
import { EmptySearchComponent } from '../home/HomeScreen';
import VideoComponent from './VideoComponent';
import stylesheet from './VideoStyles';
import useVideos from './useVideos';

const VideosListScreen = () => {
  const {videos} = useVideos();
  const {theme} = useContext(ThemeContext);
  const styles = stylesheet(theme as ThemeType);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={videos}
        renderItem={({item, index}) => <VideoComponent video={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptySearchComponent}
      />
    </View>
  );
};

export default VideosListScreen;
