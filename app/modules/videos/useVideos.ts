import axios, {AxiosResponse} from 'axios';
import {Strings} from '../../constants';
import {useEffect, useState} from 'react';

export interface VideoType {
  description: string;
  source: string[];
  subtitle: string;
  thumb: string;
  title: string;
}

interface CategoryType {
  name: string;
  videos: VideoType[];
}

interface ResponseType {
    categories: CategoryType[]
}

const useVideos = () => {

const [videos, setVideos] = useState<VideoType[] | undefined>();  

  useEffect(() => {
    const getVideos = async () => {
      const videosList: AxiosResponse<ResponseType> = await axios.get(
        Strings.videosEndpoint,
      );
        if (videosList.data) setVideos(videosList.data.categories[0]?.videos);
        console.log("videos list ", videosList.data)
    };
      getVideos();
  }, []);

return {
    videos
}
    
};
export default useVideos;
