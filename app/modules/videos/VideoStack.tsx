import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationRoutes } from '../../constants';
import VideoPlayer from './VideoPlayer';
import VideosListScreen from './VideosListScreen';
import { VideoType } from './useVideos';

export type VideoStackParamsList = {
  [NavigationRoutes.VideoScreen]: undefined;
  [NavigationRoutes.VideoPlayer]: { video: VideoType };
};

const VideoNavigator = createNativeStackNavigator<VideoStackParamsList>();

const VideoStack = (): JSX.Element => {
  
  return (
    <VideoNavigator.Navigator screenOptions={{
      headerShown: false
    }}>
      <VideoNavigator.Screen
        name={NavigationRoutes.VideoScreen}
        component={VideosListScreen}
      />
      <VideoNavigator.Screen
        name={NavigationRoutes.VideoPlayer}
        component={VideoPlayer}
      />
    </VideoNavigator.Navigator>
  );
};

export default VideoStack;
