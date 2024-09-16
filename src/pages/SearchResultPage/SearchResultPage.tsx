import {Tabs} from "@/components/Tabs/Tabs";
import {Toggle} from '@/components/Toggle/Toggle';
import {useRef, useState} from "react";
import {
  ResultVideoInnerWithScreenShot
} from "@/pages/Search/components/ResultVideoInnerWithScreenShot/ResultVideoInnerWithScreenShot";
import {SearchVideoCard} from "@/pages/SearchResultPage/SearchVideoCard";
import {playlistsAPI} from "@/api";
import {useSearchParams} from "react-router-dom";

export const SearchResultPage = () => {
  const [params] = useSearchParams();
  const [isChecked] = useState(false)
  const [activeTab, setActiveTab] = useState(0);
  const search = useRef<HTMLInputElement | null>(null);

  // const {data, isFetching, isLoading, isSuccess} = videosAPI.useGetMyVideosQuery({});
  const {data: playlists} = playlistsAPI.useGetMyPlaylistsQuery({})
  const videos = playlists?.results[0].videos
  console.log(videos)

  // const makeSearch = useDebounce(() => {
  //   const data = search.current?.value || '';
  //   if (data) {
  //     setParams({search: data});
  //   } else {
  //     setParams({});
  //   }
  // }, 500);

  return (
      <div className='pt-[12px]'>
        <div>
          <div className='absolute left-[18%] top-[10%]'>
            <Toggle title='Искать по точному совпадению' checked={isChecked} onChange={() => {
            }}/>
          </div>
          <Tabs activeTab={activeTab} onChange={(index: number) => setActiveTab(index)}/>
        </div>
        <div className='relative flex flex-col h-[620px] scroll-bar overflow-y-scroll'>
          {activeTab === 0 ?
              <div>
                {videos && !params.get('search') && videos.map(video => <SearchVideoCard key={video.publicId}
                                                                                         video={video}/>)}
                <ResultVideoInnerWithScreenShot search={search}/>
              </div>
              :
              activeTab === 1 ? <ResultVideoInnerWithScreenShot search={search}/>
                  : activeTab === 2 ? <>{videos && videos?.map(video => <SearchVideoCard key={video.publicId}
                                                                                         video={video}/>)}</>
                      : <></>
          }
        </div>
      </div>
  );
};

