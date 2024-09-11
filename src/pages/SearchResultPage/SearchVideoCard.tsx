import {Video} from "@/types/videosTypes";
import {VideoCard} from "@/components/VideoCard/VideoCard";
import {useGetMovieByIdQuery} from "@/api";


interface SearchVideoCardProps {
  video: Video
}

export const SearchVideoCard = ({video}: SearchVideoCardProps) => {
  const {data} = useGetMovieByIdQuery({id: video.publicId})
  if (!data) return null;

  return (
      <>
              <div
                  className='cursor-pointer p-[15px] mb-[12px] flex gap-[20px] bg-white border-[1px] border-[#EDEFF3] rounded-[12px] w-[990px] h-[240px]'>
                <VideoCard video={data} iframeClassName='w-[320px] h-[208px] rounded-[12px]'/>
                <p className='font-open-sans font-normal text-[14px] text-indigo'>
                  <p className='font-open-sans font-bold text-[14px] text-indigo pt-[30px]'>{data.title}</p>
                  <p>{data.description.slice(0, 550)}</p>
                </p>
              </div>
      </>
  )
};
