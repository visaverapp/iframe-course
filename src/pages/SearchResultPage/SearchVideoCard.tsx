
import {Video} from "@/types/videosTypes";
import {VideoCard} from "@/components/VideoCard/VideoCard";


interface SearchVideoCardProps {
  video: Video
}

export const SearchVideoCard = ({video}:SearchVideoCardProps) => {
  return (
      <div className='cursor-pointer p-[15px] mb-[12px] flex gap-[20px] bg-white border-[1px] border-[#EDEFF3] rounded-[12px] w-[990px] h-[240px]'>
        <VideoCard video={video} iframeClassName='w-[320px] h-[208px] rounded-[12px]' />
        <p className='font-open-sans font-normal text-[14px] text-indigo pt-[30px]'>SWOT-анализ — это анализ сильных и слабых сторон, возможностей и угроз. Он дает полную картину внешних и внутренних факторов, а также положения компании среди конкурентов — все это помогает определить стратегию выхода на рынок или масштабирования бизнеса. Этот метод актуален с 80-х годов и применяется для разработки стратегических решений.</p>
      </div>
  )
};
