import {VideoCard} from "@/components/VideoCard/VideoCard";
import {Summary} from "@/pages/Summary/Summary";
import {useCallback, useEffect, useRef, useState} from "react";
import {InputSearchTimecodes} from "@/pages/ReezOnly/InputSearchTimecodes/InputSearchTimecodes";
import {playlistsAPI, videosAPI} from "@/api";
import YouTube from "react-youtube";
import {Timecodes} from "@/pages/VideoPage/Timecodes/Timecodes";
import {VideoFragmentCard} from "@/components/Card/VideoFragmentCard";
import {useSearchParams} from "react-router-dom";

export const Video = () => {
  const [currentTime, setCurrentTime] = useState(null);
  const iframe = useRef<YouTube>(null);
  const iframeWrapper = useRef<HTMLDivElement>(null);
  const vkRef = useRef<HTMLIFrameElement>(null);
  const [param, setParam] = useSearchParams();
  const playlistId = "59609dd8-7ef4-4080-9cb8-3c2cab266494"
  const videoId = "5ec5bb33-9c1e-4295-8a82-ca36138da3cb"
  // const [filteredTimecodes, setFilteredTimecodes] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');

  const {
    data: video,
  } = videosAPI.useGetMovieByIdQuery({ id: videoId  ?? '' });

  const [getSearchVideos, { data: searchVideos, isLoading: isSearchLoading, error: searchError }] =
      playlistsAPI.useLazyGetFullSearchQuery();  //получили все видео плейлиста


  const getSearchVideosHandler = useCallback(
      async (query: string) => {
        await getSearchVideos({ query, publicId: playlistId || '' });
      },
      [playlistId],
  );

  // const filterTimecodes = (timecodes: any) => {
  //   if (!searchQuery) return timecodes; // Если нет запроса, вернуть все таймкоды
  //   return timecodes.filter(tc =>
  //       tc.text.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // };
  //
  // useEffect(() => {
  //    if (searchVideos) {
  //     const filtered = filterTimecodes(searchVideos);
  //     setFilteredTimecodes(filtered);
  //   }
  // }, [searchVideos, searchQuery]);

  const goToTime = useCallback(
      (time: number) => {
        if (video && video.source === 'VK' && vkRef.current) {
          // TODO разобраться с типизацией
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const player = window.VK.VideoPlayer(vkRef.current);
          player.seek(time);

          iframeWrapper.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }

        iframe.current?.internalPlayer.seekTo(time, true);
        iframeWrapper.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
      [video],
  );

  return (
      <div className='w-[100vw] h-[100vh] bg-white-hover'>
      <div className='fixed left-[20%] top-[-4%] flex gap-[14px] w-[1080px] h-[600px] bg-white p-[40px] mt-[10%] mx-auto rounded-[15px]'>
        <div>
          <div className='mb-[14px]'>
            <InputSearchTimecodes getSearch={getSearchVideosHandler} />
          </div>
          {searchVideos ? (
              <div>
                {searchVideos &&
                    searchVideos.map((fragment) =>
                        fragment.cues.map((cue, i) => {
                          if (fragment.publicId === video!.publicId) {
                            return (
                          //       <Timecodes key={fragment.publicId} setTime={goToTime} currentTime={currentTime} id={videoId} playlistId={playlistId}/>
                                <VideoFragmentCard
                                    fragment={cue}
                                    key={fragment.publicId + i}
                                    goToTime={goToTime}
                                    videoPreview={fragment.thumbnailUrl}
                                />
                            );
                          }
                        }),
                    )}
              </div>
          )
              : <>{!param.get('search') && <Timecodes setTime={goToTime} currentTime={currentTime} id={videoId} playlistId={playlistId}/>}</>
          }


            {/*<Timecodes setTime={goToTime} currentTime={currentTime} id={videoId} playlistId={playlistId}/>*/}
        </div>
        <div>
          <div className='mb-[14px]'>
            {video && <VideoCard setCurrentTime={()=>{}} video={video} iframeClassName='w-[440px] h-[252px] rounded-[12px]'/>}
          </div>
          <Summary id={videoId} playlistId={playlistId}/>
        </div>
      </div>
      </div>
  );
};

