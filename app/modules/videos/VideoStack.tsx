import { NativeStackHeaderProps, NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { NavigationRoutes, Strings } from '../../constants';
import VideoPlayer from './VideoPlayer';
import VideosListScreen from './VideosListScreen';
import { VideoType } from './useVideos';
import { CustomHeaderWithBack, CustomHeaderWithoutBack } from '../../components/custom-header-back';
import { RouteProp } from '@react-navigation/native';

export type VideoStackParamsList = {
  [NavigationRoutes.VideoScreen]: undefined;
  [NavigationRoutes.VideoPlayer]: {video: VideoType};
};

interface VideoPlayerRoutePropType extends NativeStackHeaderProps {
route:  NativeStackScreenProps<VideoStackParamsList, NavigationRoutes.VideoPlayer>['route']
}
// type VideoPlayerRoutePropType = NativeStackScreenProps<VideoStackParamsList, NavigationRoutes.VideoPlayer>['route']

const VideoNavigator = createNativeStackNavigator<VideoStackParamsList>();

const VideoStack:FC = () => {
  
  return (
    <VideoNavigator.Navigator>
      <VideoNavigator.Screen
        options={{
          header: () => <CustomHeaderWithoutBack title={Strings.bottomNavigationTitles.videos} />
        }}
        name={NavigationRoutes.VideoScreen}
        component={VideosListScreen}
      />
      <VideoNavigator.Screen
        name={NavigationRoutes.VideoPlayer}
        component={VideoPlayer}
        options={{
          header: ({ route }) => <CustomHeaderWithBack title={(route.params?.video.title)} />
      
        }}
      />
    </VideoNavigator.Navigator>
  );
};

export default VideoStack;
