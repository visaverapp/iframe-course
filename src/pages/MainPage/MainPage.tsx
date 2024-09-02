import React from 'react';
import {VideoPage} from "@/pages/VideoPage/VideoPage";
import {Summary} from "@/pages/Summary/Summary";

export const MainPage = () => {
  return (
      <div className='flex gap-[14px]'>
        <VideoPage/>
        <Summary />
      </div>
  );
};

