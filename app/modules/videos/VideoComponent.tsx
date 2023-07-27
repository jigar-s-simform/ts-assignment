import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationRoutes, Strings } from '../../constants';
import { navigateWithParam } from '../../utils';
import stylesheet from './VideoStyles';
import useVideos, { UseVideosReturnType, VideoType } from './useVideos';

interface VideoComponentPropsType {
  video: VideoType;
}

const VideoComponent = ({ video }: VideoComponentPropsType): JSX.Element => {
  
  const navigateToVideoPlayer = (): void => {
    navigateWithParam(NavigationRoutes.VideoPlayer, {video});
  };
  
  const { theme }: UseVideosReturnType = useVideos();
  const styles = stylesheet(theme);

  return (
    <TouchableOpacity
      style={styles.renderItemMainContainer}
      onPress={navigateToVideoPlayer}>
      <Image
        source={{uri: video.thumb.replace(Strings.http, Strings.https)}}
        style={styles.videoThumbNail}
      />
      <View style={styles.videoPlayerBottomContainer}>
        <Image
          source={{uri: video.thumb.replace(Strings.http, Strings.https)}}
          style={styles.bottomThumbRound}
        />
        <View style={styles.titleSubTitleContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>{video.subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VideoComponent;
