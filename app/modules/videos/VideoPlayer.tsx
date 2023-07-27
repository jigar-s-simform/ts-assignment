import Slider from '@react-native-community/slider';
import { RouteProp, useRoute } from '@react-navigation/native';
import {
  ArrowFatLineLeft,
  ArrowFatLineRight,
  Chats,
  CornersOut,
  Pause,
  Play,
  Share,
  SpeakerHigh,
  SpeakerSlash,
  ThumbsDown,
  ThumbsUp,
} from 'phosphor-react-native';
import { FC, LegacyRef, useRef } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Video from 'react-native-video';
import { NavigationRoutes, Strings } from '../../constants';
import {
  Colors,
  globalMetrics,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import { VideoStackParamsList } from './VideoStack';
import stylesheet from './VideoStyles';
import useVideos, { UseVideosReturnType } from './useVideos';

type VideoPlayerRouteProp = RouteProp<
  VideoStackParamsList,
  NavigationRoutes.VideoPlayer
>;

type VideoRefType = LegacyRef<Video> | undefined;

const VideoPlayer: FC = () => {
  const videoToPlay = useRoute<VideoPlayerRouteProp>();
  const { video } = videoToPlay.params;
  const videoRef = useRef<Video>();
  const {
    currentTime,
    duration,
    isPlaying,
    onLoad,
    controlsVisible,
    handleControlsVisibility,
    handlePlayPause,
    onProgress,
    seekBackward,
    seekForward,
    presentFullScreen,
    handleSliderChange,
    durationObj,
    currentTimeObj,
    width,
    height,
    isAudible,
    toggleAudio,
    theme,
  }: UseVideosReturnType = useVideos(videoRef);

  const styles = stylesheet(theme);
  // current position of slider
  const currentPosition = currentTime && duration ? currentTime / duration : 0;

  return (
    <View style={styles.VideoPlayerMainContainer}>
      <View
        style={
          width < height
            ? styles.videoContainer
            : {
                ...styles.videoContainer,
                width,
                height: height - verticalScale(5),
              }
        }>
        <Video
          resizeMode={width < height ? 'none' : 'contain'}
          volume={isAudible ? 1 : 0}
          onLoad={onLoad}
          paused={!isPlaying}
          onProgress={onProgress}
          ref={videoRef as VideoRefType}
          source={{
            uri: video.sources[0].replace(Strings.http, Strings.https),
          }}
          style={
            width < height
              ? styles.video
              : {
                  ...styles.video,
                  width: width - horizontalScale(4),
                  height: height - verticalScale(2),
                }
          }
        />
        <TouchableOpacity
          style={[
            styles.controlsContainer,
            width < height
              ? styles.controlsContainer
              : {
                  ...styles.controlsContainer,
                  width,
                  height: height - verticalScale(4),
                },
            {opacity: controlsVisible ? 0.7 : 0},
          ]}
          onPress={handleControlsVisibility}>
          <View style={styles.audioContainer}>
            <TouchableOpacity onPress={toggleAudio}>
              {isAudible ? (
                <SpeakerHigh
                  size={moderateScale(30)}
                  color={Colors[theme].white}
                />
              ) : (
                <SpeakerSlash
                  size={moderateScale(30)}
                  color={Colors[theme].white}
                />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={
              width < height
                ? styles.centerContainer
                : {...styles.centerContainer, width}
            }>
            <TouchableOpacity onPress={seekBackward}>
              <ArrowFatLineLeft
                size={moderateScale(30)}
                color={Colors[theme].white}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePlayPause}>
              {!isPlaying ? (
                <Play size={moderateScale(30)} color={Colors[theme].white} />
              ) : (
                <Pause size={moderateScale(30)} color={Colors[theme].white} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={seekForward}>
              <ArrowFatLineRight
                size={moderateScale(30)}
                color={Colors[theme].white}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.controlsBottom}>
            <View style={styles.durationContainer}>
              <Text
                style={
                  styles.durationText
                }>{`${currentTimeObj.min}${Strings.colons}`}</Text>
              <Text
                style={
                  styles.durationText
                }>{`${currentTimeObj.secs} ${Strings.slash} `}</Text>
              <Text
                style={
                  styles.durationText
                }>{`${durationObj.min}${Strings.colons}`}</Text>
              <Text style={styles.durationText}>{durationObj.secs}</Text>
            </View>
            <TouchableOpacity onPress={presentFullScreen}>
              <CornersOut
                size={moderateScale(30)}
                color={Colors[theme]?.white}
              />
            </TouchableOpacity>
          </View>
          <Slider
            thumbTintColor={Colors[theme]?.white}
            tapToSeek={true}
            onValueChange={handleSliderChange}
            minimumValue={0}
            maximumValue={1}
            style={
              width < height
                ? styles.sliderStyles
                : {
                    ...styles.sliderStyles,
                    bottom: globalMetrics.isIos
                      ? -verticalScale(30)
                      : -verticalScale(20),
                  }
            }
            value={currentPosition}
            minimumTrackTintColor={Colors.commonColors.red}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.videoBottomContainer}>
        <View style={styles.videoBottom}>
          <View style={styles.videoBottomLeft}>
            <Image
              source={{uri: video.thumb.replace(Strings.http, Strings.https)}}
              style={styles.bottomThumbRound}
            />
            <View style={styles.titleSubTitleContainer}>
              <Text style={styles.title}>{video.title}</Text>
              <Text style={styles.subtitle}>{video.subtitle}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.subscribeBtn}>
            <Text style={styles.subscribeBtnText}>{Strings.subscribe}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reactionContainer}>
          <View style={styles.reactionItem}>
            <ThumbsUp size={moderateScale(28)} color={Colors[theme].black} />
            <Text
              style={
                styles.reactionItemText
              }>{`${Strings.like} ${Strings.pipe}`}</Text>
            <ThumbsDown
              size={moderateScale(25)}
              mirrored={true}
              color={Colors[theme].black}
            />
          </View>
          <View style={styles.reactionItem}>
            <Share size={moderateScale(28)} color={Colors[theme].black} />
            <Text style={styles.reactionItemText}>{`${Strings.share}`}</Text>
          </View>
          <View style={styles.reactionItem}>
            <Chats size={moderateScale(28)} color={Colors[theme].black} />
            <Text style={styles.reactionItemText}>{`${Strings.liveChat}`}</Text>
          </View>
        </View>
        <View style={styles.commentsConatiner}>
          <Text
            style={styles.commentTitleText}>{`${Strings.commentTitle}`}</Text>
          <Text style={styles.commentContentText}>{`${Strings.comment}`}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoPlayer;
