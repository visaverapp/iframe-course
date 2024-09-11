import {Tabs} from "@/components/Tabs/Tabs";
import {Toggle} from '@/components/Toggle/Toggle';
import {useRef, useState} from "react";
import {
  ResultVideoInnerWithScreenShot
} from "@/pages/Search/components/ResultVideoInnerWithScreenShot/ResultVideoInnerWithScreenShot";
import {SearchVideoCard} from "@/pages/SearchResultPage/SearchVideoCard";
import {playlistsAPI} from "@/api";
import {useDebounce} from "@/hooks/useDebounce";
import {useSearchParams} from "react-router-dom";
import backIcon from "@/components/SVGIcons/BackIcon.svg";
import SearchIcon from "@/components/SVGIcons/SearchIcon";

export const SearchResultPage = () => {
  const [params, setParams] = useSearchParams();
  const [isChecked] = useState(false)
  const [activeTab, setActiveTab] = useState(0);
  const search = useRef<HTMLInputElement | null>(null);

  // const {data, isFetching, isLoading, isSuccess} = videosAPI.useGetMyVideosQuery({});
  const {data: playlists} = playlistsAPI.useGetMyPlaylistsQuery({})
  const videos = playlists?.results[0].videos
  console.log(videos)

  const makeSearch = useDebounce(() => {
    const data = search.current?.value || '';
    if (data) {
      setParams({search: data});
    } else {
      setParams({});
    }
  }, 500);

  const onSearch = () => {
    makeSearch();
  };

  return (
      <div>
        <div className='flex gap-[5px] pb-[12px]'>
          <button
              className='hover:bg-white-hover pl-3 w-[45px] h-[40px] rounded-[9px] border-[#EDEFF3] border-[1px]'>
            <img src={backIcon} alt="backIcon"/>
          </button>
          <div className='relative'>
            <input
                type="text"
                ref={search}
                onChange={onSearch}
                defaultValue={params.get('search') ?? ''}
                placeholder='Какие слова ищем в этом курсе?'
                className='w-[945px] h-[40px] focus:outline-none focus:border-light-gray self-end pl-[16px] pr-[45px] pt-[7px] pb-[10px] border-[#EDEFF3] border-[1px] rounded-[9px] text-[16px] text-dark-blue'
            />
            <div className='absolute right-[2%] top-[20%]'>
              <SearchIcon/>
            </div>
          </div>
          {/*<SearchInput suggestionsList={[]}/>*/}
        </div>
        <div>
          <div className='absolute left-[4%] top-[16%]'>
            <Toggle title='Искать по точному совпадению' checked={isChecked} onChange={() => {
            }}/>
          </div>
          <Tabs activeTab={activeTab} onChange={(index: number) => setActiveTab(index)}/>
        </div>
        <div className='relative flex flex-col h-[412px] scroll-bar overflow-y-scroll'>
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

