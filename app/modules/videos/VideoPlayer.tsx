import { RouteProp, useRoute } from '@react-navigation/native';
import {
    ArrowFatLineLeft,
    ArrowFatLineRight,
    CornersOut,
    Pause,
    Play,
} from 'phosphor-react-native';
import { LegacyRef, useRef } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Video from 'react-native-video';
import { NavigationRoutes, Strings } from '../../constants';
import { Colors } from '../../theme';
import { VideoStackParamsList } from './VideoStack';
import styles from './VideoStyles';
import useVideos, { UseVideoReturnType } from './useVideos';

type VideoPlayerRouteProp = RouteProp<
  VideoStackParamsList,
  NavigationRoutes.VideoPlayer
>;

type VideoRefType = LegacyRef<Video> | undefined;

const VideoPlayer = ():JSX.Element => {
  const videoToPlay = useRoute<VideoPlayerRouteProp>();
  const { video } = videoToPlay.params;
  const videoRef = useRef<Video>();
  const {
    isPlaying,
    controlsVisible,
    handleControlsVisibility,
    handlePlayPause,
    onProgress,
    seekBackward,
    seekForward,
    presentFullScreen,
  }: UseVideoReturnType = useVideos(videoRef);

  return (
    <ScrollView>
      <View style={styles.videoContainer}>
        <Video
          paused={!isPlaying}
          onProgress={onProgress}
          ref={videoRef as VideoRefType}
          source={{
            uri: video.sources[0].replace(Strings.http, Strings.https),
          }}
          style={styles.video}
        />
        <View style={styles.videoBottom}>
          <Image
            source={{uri: video.thumb.replace(Strings.http, Strings.https)}}
            style={styles.bottomThumbRound}
          />
          <View style={styles.titleSubTitleContainer}>
            <Text style={styles.title}>{video.title}</Text>
            <Text style={styles.subtitle}>{video.subtitle}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.controlsContainer,
            {opacity: controlsVisible ? 0.5 : 0},
          ]}
          onPress={handleControlsVisibility}>
          <View style={styles.centerContainer}>
            <TouchableOpacity onPress={seekBackward}>
              <ArrowFatLineLeft size={30} color={Colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePlayPause}>
              {!isPlaying ? (
                <Play size={30} color={Colors.white} />
              ) : (
                <Pause size={30} color={Colors.white} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={seekForward}>
              <ArrowFatLineRight size={30} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.controlsBottom}>
            <TouchableOpacity onPress={presentFullScreen}>
              <CornersOut size={30} color={Colors.white} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default VideoPlayer;
