import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Strings } from '../../constants';
import styles from './VideoStyles';
import { VideoType } from './useVideos';

interface VideoComponentPropsType {
    video: VideoType
}

const VideoComponent = ({ video }: VideoComponentPropsType) => {
  
  return (
    <TouchableOpacity
      style={styles.renderItemMainContainer}>
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
