import axios, {AxiosResponse} from 'axios';
import {Strings} from '../../constants';
import {LegacyRef, useEffect, useRef, useState} from 'react';
import Video, {OnProgressData} from 'react-native-video'
export interface VideoType {
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
  title: string;
}

interface CategoryType {
  name: string;
  videos: VideoType[];
}

interface ResponseType {
  categories: CategoryType[];
}

const useVideos = (videoRef?: React.MutableRefObject<Video | undefined>) => {
  const [videos, setVideos] = useState<VideoType[] | undefined>();
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);

  useEffect(() => {
    const getVideos = async () => {
      const videosList: AxiosResponse<ResponseType> = await axios.get(
        Strings.videosEndpoint,
      );
      if (videosList.data) setVideos(videosList.data.categories[0]?.videos);
    };
    getVideos();
  }, []);
 
  useEffect(() => {
    if (controlsVisible) {
      setTimeout(() => {
        setControlsVisible(false)
      },2000)
    }
  },[controlsVisible])

  const seekForward = () => {
    videoRef?.current?.seek(currentTime + 10)
  }

  const seekBackward = () => {
    videoRef?.current?.seek(currentTime - 10);
  }

  const onProgress = (data: OnProgressData) =>{
    setCurrentTime(data.currentTime);
  }
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleControlsVisibility = () => {
    setControlsVisible(true)
  }

  const presentFullScreen = () => {
    videoRef?.current?.presentFullscreenPlayer()
  }

  const dismissFullScreen = () => {

  }

  return {
    videos,
    controlsVisible,
    handleControlsVisibility,
    isPlaying,
    handlePlayPause,
    onProgress,
    seekForward,
    seekBackward,
    presentFullScreen
  };
};
export default useVideos;
