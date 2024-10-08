import {Tabs} from "@/components/Tabs/Tabs";
import {Toggle} from '@/components/Toggle/Toggle';
import {useMemo, useRef, useState} from "react";
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
  const [toggleActive, setToggleActive] = useState(false);
  const search = useRef<HTMLInputElement | null>(null);

  const {data: playlists} = playlistsAPI.useGetMyPlaylistsQuery({})
  const videos = playlists?.results[0].videos

  const {data: fragments} = playlistsAPI.useGetFullSearchQuery({
    publicId: "59609dd8-7ef4-4080-9cb8-3c2cab266494",
    query: search.current?.value || params.get("search") || ""
  });

  const countFragments = useMemo(() => {
    if (!fragments) return 0;
    return fragments.reduce((total, fragment) => {
      return total + (fragment.cues?.length || 0);
    }, 0);
  }, [fragments]);

  const searchItemCountAll = `${videos && fragments ? videos.length + countFragments : ''}`
  const tabs = [`Все (${toggleActive && params.get('search') ? fragments ? countFragments : 0 :searchItemCountAll})`, `Фрагменты (${countFragments})`, `Видео (${toggleActive && params.get('search') ? 0 : videos ? videos.length : 0})`]

  return (
      <div className='pt-[12px]'>
        <div>
          <div className='absolute left-[18%] top-[12%]'>
            <Toggle title='Искать по точному совпадению' checked={isChecked} onChange={() => setToggleActive(prevState => !prevState)}/>
          </div>
          <Tabs tabsLabel={tabs} activeTab={activeTab} onChange={(index: number) => setActiveTab(index)}/>
        </div>
        <div className='relative flex flex-col scroll-bar overflow-y-scroll'>
          {activeTab === 0 ?
              <div>
                {!toggleActive && videos && videos.map(video => <SearchVideoCard key={video.publicId}
                                                                                         video={video}/>)}
                {toggleActive && !params.get('search') && videos?.map(video => <SearchVideoCard key={video.publicId}
                                                                                         video={video}/>)}
                <ResultVideoInnerWithScreenShot search={search}/>
              </div>
              :
              activeTab === 1 ? <ResultVideoInnerWithScreenShot search={search}/>
                  : activeTab === 2 ? <>{!toggleActive && videos && videos?.map(video => <SearchVideoCard key={video.publicId}
                                                                                         video={video}/>)}</>
                      : <></>
          }
        </div>
      </div>
  );
};

