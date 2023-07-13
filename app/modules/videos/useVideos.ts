import { data } from '../../constants';
export interface VideoType {
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
  title: string;
}

export interface UseVideoReturnType {
  videos: VideoType[] 
}

const useVideos = (): UseVideoReturnType => {

const videos = data?.categories[0]?.videos

return {
  videos
}
};

export default useVideos;
