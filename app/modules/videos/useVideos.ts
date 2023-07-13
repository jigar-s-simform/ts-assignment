import { useEffect, useState } from 'react';
import { data } from '../../constants';
import Video, { OnProgressData } from 'react-native-video';
export interface VideoType {
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
  title: string;
}

export interface UseVideoReturnType {
  videos: VideoType[] 
  controlsVisible: boolean
  handleControlsVisibility: () => void
  isPlaying: boolean
  handlePlayPause: () => void
  onProgress: (data: OnProgressData) => void
  seekForward: () => void,
  seekBackward: () => void,
  presentFullScreen: () => void
}

const useVideos = (videoRef?: React.MutableRefObject<Video | undefined>): UseVideoReturnType => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);

  const videos: VideoType[] = data?.categories[0]?.videos
 
  useEffect(() => {
    if (controlsVisible) {
      setTimeout(() => {
        setControlsVisible(false)
      },2000)
    }
  },[controlsVisible])

  const seekForward = (): void => {
    videoRef?.current?.seek(currentTime + 10)
  }

  const seekBackward = (): void => {
    videoRef?.current?.seek(currentTime - 10);
  }

  const onProgress = (data: OnProgressData): void =>{
    setCurrentTime(data.currentTime);
  }
  
  const handlePlayPause = (): void => {
    setIsPlaying(!isPlaying)
  }

  const handleControlsVisibility = (): void => {
    setControlsVisible(true)
  }

  const presentFullScreen = (): void => {
    videoRef?.current?.presentFullscreenPlayer()
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
