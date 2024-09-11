import {useState} from "react";
import {
  SearchInVideoInput
} from "@/components/SearchTimecodesVideoInput/SearchInVideoInput";
import {Timecodes} from "@/pages/VideoPage/Timecodes/Timecodes";
import QuizPage from "@/pages/QuizPage/QuizPage";
import {DescriptionTextVideo} from "@/pages/VideoPage/DescriptionTextVideo/DescriptionTextVideo";
import {VideoCard} from "@/components/VideoCard/VideoCard";


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

// const searchVideos = []


export const VideoPage = () => {
  const [tab, setTab] = useState(1)
  const [isActiveInput, setIsActiveInput] = useState(false)
  // const [isCollapsed, setIsCollapsed] = useState(true);
  // const [currentTime] = useState(null);


  // const iframe = useRef<YouTube>(null);
  // const iframeWrapper = useRef<HTMLDivElement>(null);
  // const vkRef = useRef<HTMLIFrameElement>(null);

  const onChange = (value: boolean) => {
    setIsActiveInput(value)
    // setIsCollapsed(false)
  }

  const playlistId = 'c92ce130-e837-4db3-8278-638fca4b9f9a'


  return (
      <section>
        {/*{isLoading && <FullScreenLoader />}*/}
        {video && (
            <div className='flex flex-col gap-[12px]'>
              <VideoCard video={video} iframeClassName='w-[100%] h-[404px]'/>
              <p className='font-open-sans font-bold text-[16px] text-dark-blue'>{video.title}</p>

              <div>
                {playlistId && (
                    <>
                      <div className='flex gap-[12px]'>
                        <SearchInVideoInput onChange={onChange}/>
                        {!isActiveInput &&
                            <div className='flex border-white-active border-[1px] rounded-[12px] bg-white'>
                                 <span className={`${tab === 1 ? 'bg-green-active font-bold text-white' : 'bg-white font-normal text-dark-blue'} cursor-pointer block pl-[24px] pr-[40px] py-[8px] font-open-sans rounded-[12px] text-center w-[120px] h-[40px] text-[14px] content-evenly`} onClick={() => setTab(1)}>Таймкоды</span>
                                <span className={`${tab === 2 ? 'bg-green-active font-bold text-white' : 'bg-white font-normal text-dark-blue'} cursor-pointer block px-[26px] py-[8px] font-open-sans rounded-[12px] text-center w-[120px] h-[40px] text-[14px] content-evenly`} onClick={() => setTab(2)}>Описание</span>
                                <span className={`${tab === 3 ? 'bg-green-active font-bold text-white' : 'bg-white font-normal text-dark-blue'} cursor-pointer block px-[26px] py-[8px] font-open-sans rounded-[12px] text-center w-[116px] h-[40px] text-[14px] content-evenly`} onClick={() => setTab(3)}>Тест</span>
                            </div>
                        }
                      </div>

                      {/*{searchVideos && (*/}
                      {/*    <div>*/}
                      {/*      {searchVideos &&*/}
                      {/*          searchVideos.map((fragment) =>*/}
                      {/*              fragment.cues.map((cue, i) => {*/}
                      {/*                if (fragment.publicId === video.publicId) {*/}
                      {/*                  return (*/}
                      {/*                      <VideoFragmentCard*/}
                      {/*                          fragment={cue}*/}
                      {/*                          key={fragment.publicId + i}*/}
                      {/*                          // goToTime={goToTime}*/}
                      {/*                          videoPreview={fragment.thumbnailUrl}*/}
                      {/*                      />*/}
                      {/*                  );*/}
                      {/*                }*/}
                      {/*              }),*/}
                      {/*          )}*/}
                      {/*    </div>*/}
                      {/*)}*/}
                      {/*{isSearchLoading && <FullScreenLoader />}*/}
                    </>
                )}
              </div>
              {tab === 1 ? <Timecodes setTime={()=>{}} id={''} currentTime={0} playlistId={''}/> :
                  tab === 2 ? <DescriptionTextVideo />
                      : tab === 3 ? <QuizPage></QuizPage> : <></> }

            </div>
        )}
      </section>
  );
};
