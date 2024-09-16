import {useCallback, useRef, useState} from "react";
import {SearchInVideoInput} from "@/components/SearchTimecodesVideoInput/SearchInVideoInput";
import {Timecodes} from "@/pages/VideoPage/Timecodes/Timecodes";
import QuizPage from "@/pages/QuizPage/QuizPage";
import {VideoCard} from "@/components/VideoCard/VideoCard";
import {useSearchParams} from "react-router-dom";
import YouTube from "react-youtube";
import {playlistsAPI, videosAPI} from "@/api";
import {VideoFragmentCard} from "@/components/Card/VideoFragmentCard";
import FullScreenLoader from "@/components/FullScreenLoader/FullScreenLoader";

interface VideoPage {
  showBackButton: boolean
}
export const VideoPage = ({showBackButton}: VideoPage) => {
  const [tab, setTab] = useState(1)
  const [isActiveInput, setIsActiveInput] = useState(false)
  const [currentTime] = useState(null);
  const [showVideoCard, setShowVideoCard] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [isSearchLoading] = useState(false);
  const iframe = useRef<YouTube>(null);
  const iframeWrapper = useRef<HTMLDivElement>(null);
  const vkRef = useRef<HTMLIFrameElement>(null);
  const [param] = useSearchParams();
  const playlistId = "59609dd8-7ef4-4080-9cb8-3c2cab266494"
  const videoId = "5ec5bb33-9c1e-4295-8a82-ca36138da3cb"

  const {
    data: video,
  } = videosAPI.useGetMovieByIdQuery({id: videoId ?? ''});

  const [getSearchVideos, {data: searchVideos}] =
      playlistsAPI.useLazyGetFullSearchQuery();  //получили все видео плейлиста

  const getSearchVideosHandler = useCallback(
      async (query: string) => {
        await getSearchVideos({query, publicId: playlistId || ''});
      },
      [playlistId],
  );

  const goToTime = useCallback(
      (time: number) => {
        if (video && vkRef.current) {
          // TODO разобраться с типизацией
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const player = window.VK.VideoPlayer(vkRef.current);
          player.seek(time);

          iframeWrapper.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
          return;
        }

        iframe.current?.internalPlayer.seekTo(time, true);
        iframeWrapper.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
      },
      [video],
  );

  const showQuizVideo = (tab: number) => {
    setTab(tab)
    if (tab === 3) {
      setShowQuiz(true)
    } else {
      setShowQuiz(false)
    }
  }

  return (
      <section>
        {video && (
            <div className='flex flex-col gap-[12px] h-[96vh]'>
              {showVideoCard && <><VideoCard video={video}
                                             iframeClassName={`${showQuiz ? 'mt-[-11%] z-0' : 'mt-[0px]'} h-[404px] rounded-[12px] w-[100%]`}/>
                  <p
                      className='font-open-sans font-bold text-[16px] text-dark-blue'>{video.title}</p></>
              }

              <div>
                {playlistId && (
                    <>
                      <div className='flex gap-[12px]'>
                        <SearchInVideoInput isActiveInput={isActiveInput} setIsActiveInput={(value)=>setIsActiveInput(value)} showBackButton={showBackButton} getSearch={getSearchVideosHandler}/>
                        {!isActiveInput &&
                            <div className='flex border-white-active border-[1px] rounded-[12px] bg-white'>
                          <span
                              className={`${tab === 1 ? 'bg-green-active font-bold text-white' : 'bg-white font-normal text-dark-blue'} cursor-pointer block pl-[24px] pr-[40px] py-[8px] font-open-sans rounded-[12px] text-center w-[120px] h-[40px] text-[14px] content-evenly`}
                              onClick={() => showQuizVideo(1)}>Таймкоды</span>
                           {/*     <span
                                    className={`${tab === 2 ? 'bg-green-active font-bold text-white' : 'bg-white font-normal text-dark-blue'} cursor-pointer block px-[26px] py-[8px] font-open-sans rounded-[12px] text-center w-[120px] h-[40px] text-[14px] content-evenly`}
                                    onClick={() => showQuizVideo(2)}>Описание</span>*/}
                                <span
                                    className={`${tab === 3 ? 'bg-green-active font-bold text-white' : 'bg-white font-normal text-dark-blue'} cursor-pointer block px-[26px] py-[8px] font-open-sans rounded-[12px] text-center w-[116px] h-[40px] text-[14px] content-evenly`}
                                    onClick={() => showQuizVideo(3)}>Тест</span>
                            </div>
                        }
                      </div>


                    </>
                )}
              </div>
              {tab === 1 ?
                  <>
                    {searchVideos && param.get('search') && (
                        <div
                            className='h-[276px] scroll-bar overflow-y-scroll w-[709px] rounded-[12px] border-white-active border-[1px] py-[8px] px-[16px]'>
                          {searchVideos &&
                              searchVideos.map((fragment) =>
                                  fragment.cues.map((cue, i) => {
                                    if (fragment.publicId === video.publicId) {
                                      return (
                                          <VideoFragmentCard
                                              fragment={cue}
                                              key={fragment.publicId + i}
                                              // goToTime={goToTime}
                                              videoPreview={fragment.thumbnailUrl}
                                          />
                                      );
                                    }
                                  }),
                              )}
                        </div>
                    )}
                    {isSearchLoading && <FullScreenLoader/>}
                    {!param.get('search') &&
                        <Timecodes onChange={(value) => setShowVideoCard(value)} setTime={goToTime}
                                   currentTime={currentTime}
                                   id={videoId} playlistId={playlistId}/>}
                  </>
                  /*:
                  tab === 2 ? <DescriptionTextVideo/>*/
                      : tab === 3 ? <QuizPage></QuizPage> : <></>}

            </div>
        )
        }
      </section>
  )
      ;
};
