import {useSearchParams} from "react-router-dom";
import {useRef, useState} from "react";
import SearchIcon from "@/components/SVGIcons/SearchIcon";
import {useDebounce} from "@/hooks/useDebounce";
import {playlistsAPI} from "@/api";

export const SearchInput = () => {

  const [params, setParams] = useSearchParams();
  const [] = useState(false)
  // const [activeTab, setActiveTab] = useState(0);
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
      <div className='flex flex-col justify-center items-center gap-[48px]'>
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
      </div>
  );
};