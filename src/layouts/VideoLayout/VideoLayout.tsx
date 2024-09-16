import {Summary} from "@/pages/Summary/Summary";
import {VideoPage} from "@/pages/VideoPage/VideoPage";

export const VideoLayout = () => {
  return (
      <div className='flex gap-[14px] m-[15px]'>
        <VideoPage/>
        <Summary />
      </div>
  );
};

