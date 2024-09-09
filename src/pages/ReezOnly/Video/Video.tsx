import {Timecodes} from "@/pages/VideoPage/Timecodes/Timecodes";
import {VideoCard} from "@/components/VideoCard/VideoCard";
import {Summary} from "@/pages/Summary/Summary";
import {useState} from "react";
import {InputSearchTimecodes} from "@/pages/ReezOnly/InputSearchTimecodes/InputSearchTimecodes";

const video = {
  "publicId": "c2bf1bff-13ec-4090-aa56-c50b5eb364da",
  "title": "Система. ПРО бизнес.",
  "videoId": "DmuB41GNl5U",
  "source": "YOUTUBE",
  "originLink": "https://www.youtube.com/watch?v=DmuB41GNl5U",
  "startsFrom": 0,
  "description": "Анализ. Когда и зачем анализировать рынок.",
  "thumbnailUrl": "https://i.ytimg.com/vi/DmuB41GNl5U/sddefault.jpg",
  "purpose": "PERSONAL",
  "quizIds": [
    "ac4f2bcd-6451-4eb0-828e-507ce3b2b181"
  ]
}
export const Video = () => {
  const [ ,setIsActiveInput] = useState(false)

  const onChange = (value: boolean) => {
    setIsActiveInput(value)
    // setIsCollapsed(false)
  }

  return (
      <div className='w-[100vw] h-[100vh] bg-white-hover'>
      <div className='fixed left-[20%] top-[-4%] flex gap-[14px] w-[1080px] h-[600px] bg-white p-[40px] mt-[10%] mx-auto rounded-[15px]'>
        <div>
          <div className='mb-[14px]'>
            <InputSearchTimecodes onChange={onChange}/>
          </div>
          <Timecodes/>
        </div>
        <div>
          <div className='mb-[14px]'>
            <VideoCard video={video} iframeClassName='w-[440px] h-[252px] rounded-[12px]'/>
          </div>
          <Summary/>
        </div>
      </div>
      </div>
  );
};

