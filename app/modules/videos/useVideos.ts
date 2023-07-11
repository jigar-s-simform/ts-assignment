import { NavigationProp, useNavigation } from '@react-navigation/native';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ScaledSize, StatusBar, useWindowDimensions } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Video, { OnLoadData, OnProgressData } from 'react-native-video';
import { Strings } from '../../constants';
import { globalMetrics } from '../../theme';
import styles from './VideoStyles';
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

interface TimingObjectInterface {
  min: number;
  secs: number;
}

interface UseVideosReturnType {
  currentTime: number;
  duration: number;
  videos: VideoType[] | undefined;
  onLoad: (data: OnLoadData) => void;
  controlsVisible: boolean;
  handleControlsVisibility: () => void;
  isPlaying: boolean;
  handlePlayPause: () => void;
  onProgress: (data: OnProgressData) => void;
  seekForward: () => void;
  seekBackward: () => void;
  presentFullScreen: () => void;
  handleSliderChange: (data: number) => void;
  durationObj: TimingObjectInterface;
  currentTimeObj: TimingObjectInterface;
  isAudible: boolean;
  toggleAudio: () => void;
  width: number;
  height: number;
}

const useVideos = (
  videoRef?: React.MutableRefObject<Video | undefined>,
): UseVideosReturnType => {
  const [videos, setVideos] = useState<VideoType[] | undefined>();
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number>(0);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);
  const [isAudible, setIsAudible] = useState<boolean>(true);
  const {width, height}: ScaledSize = useWindowDimensions();
  const navigation: NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();

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
        setControlsVisible(false);
      }, 1000);
    }
  }, [controlsVisible]);

  useEffect(() => {
    if (width > height) {
      navigation.getParent()?.setOptions({
        tabBarStyle: styles.tabBarStylesLandScape,
      });
      StatusBar.setHidden(true);
    } else {
      navigation.getParent()?.setOptions({
        tabBarStyle: styles.tabBarStylesPotrait,
      });
    }
  }, [width]);

  const seekForward = (): void => {
    videoRef?.current?.seek(currentTime + 10);
    handleControlsVisibility();
  };

  const seekBackward = (): void => {
    videoRef?.current?.seek(currentTime - 10);
    handleControlsVisibility();
  };

  const onProgress = (data: OnProgressData): void => {
    setCurrentTime(data.currentTime);
  };

  const handlePlayPause = (): void => {
    setIsPlaying(!isPlaying);
    handleControlsVisibility();
  };

  const handleControlsVisibility = (): void => {
    setControlsVisible(true);
  };

  const presentFullScreen = (): void => {
    if (globalMetrics.isAndroid) {
      if (width < height) Orientation.lockToLandscape();
      else Orientation.lockToPortrait();
    } else {
      videoRef?.current?.presentFullscreenPlayer();
    }
  };

  const onLoad = (data: OnLoadData): void => {
    setDuration(data.duration);
  };

  const handleSliderChange = (data: number): void => {
    videoRef?.current?.seek(data * duration);
    handleControlsVisibility();
  };

  const toggleAudio = (): void => {
    setIsAudible(!isAudible);
  };

  const durationObj: TimingObjectInterface = {
    min: Math.floor(duration / 60),
    secs: Math.ceil(duration % 60),
  };

  const currentTimeObj: TimingObjectInterface = {
    min: Math.floor(currentTime / 60),
    secs: Math.ceil(currentTime % 60),
  };

  return {
    currentTime,
    duration,
    videos,
    onLoad,
    controlsVisible,
    handleControlsVisibility,
    isPlaying,
    handlePlayPause,
    onProgress,
    seekForward,
    seekBackward,
    presentFullScreen,
    handleSliderChange,
    durationObj,
    currentTimeObj,
    isAudible,
    toggleAudio,
    width,
    height,
  };
};

export default useVideos;
