import {
  SearchVideoCardWithScreenShot
} from "@/pages/Search/components/SearchVideoCardWithScreenShots/SearchVideoCardWithScreenShot";
import { Video } from "@/types/contentTypes";

interface ResultVideoInnerWithScreenShotProps {
  videos: Video[];
}

export const ResultVideoInnerWithScreenShot = ({ videos = [] }: ResultVideoInnerWithScreenShotProps) => {
  return (
    <div>
      {videos.map((video, i) => (
        <SearchVideoCardWithScreenShot key={i} videoInfo={video} />
      ))}
    </div>
  );
};
