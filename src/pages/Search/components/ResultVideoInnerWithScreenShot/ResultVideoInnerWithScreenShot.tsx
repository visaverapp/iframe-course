import {
  SearchVideoCardWithScreenShot
} from "@/pages/Search/components/SearchVideoCardWithScreenShots/SearchVideoCardWithScreenShot";
import {playlistsAPI} from "@/api";
import {useSearchParams} from "react-router-dom";

interface ResultVideoInnerWithScreenShotProps {
  search: any
}

export const ResultVideoInnerWithScreenShot = ({search}: ResultVideoInnerWithScreenShotProps) => {
  const [params] = useSearchParams();

  const { data: fragments } = playlistsAPI.useGetFullSearchQuery(
      {publicId:'59609dd8-7ef4-4080-9cb8-3c2cab266494', query: search.current?.value || params.get('search') || ''},
      // { skip: !params.get('search') },
  );
  console.log(fragments)


  return (
    <div>
      {fragments && fragments.map((fragment, i) => (
        <SearchVideoCardWithScreenShot key={i} videoInfo={fragment} />
      ))}
    </div>
  );
};
