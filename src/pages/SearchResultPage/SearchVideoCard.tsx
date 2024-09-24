import {VideoCard} from "@/components/VideoCard/VideoCard";
import {Link} from "react-router-dom";
import {useGetMovieByIdQuery} from "@/api";
import {memo} from "react";

interface SearchVideoCardProps {
  video: any
}

export const SearchVideoCard = memo(({video}: SearchVideoCardProps) => {
  const {data} = useGetMovieByIdQuery({id: video.publicId})
  if (!data) return null;

  return (
      <Link to={'/'} state={{fromSearch: true}}>
        <div
            className='hover:bg-white-hover cursor-pointer p-[20px] ml-[14px] mb-[12px] flex gap-[32px] bg-white rounded-[12px] w-[1312px] h-[248px]'>
          <VideoCard video={data} iframeClassName='w-[320px] h-[208px] rounded-[12px]'/>
          <div className='flex flex-col'>
            <p className='font-open-sans font-bold text-[14px] text-indigo pt-[30px]'>{data.title}</p>
            <p className='font-open-sans font-normal text-[14px] text-indigo'>
              {data.description.slice(0, 550)}</p>
          </div>
        </div>
      </Link>
  )
})