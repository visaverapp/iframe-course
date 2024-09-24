import {VideoFragmentCardProps} from './VideoFragmentCard.props';
import {secondsToTime} from "@/pages/Search/utils";

export const VideoFragmentCard = ({
                                    fragment,
                                    goToTime,
                                  }: VideoFragmentCardProps) => {
  const startsFrom = parseInt(fragment.timestampLink);

  const goToHandler = () => {
    goToTime?.(startsFrom);
  };

  return (
      <div onClick={goToHandler}>
        <div>
        <span
            className='cursor-pointer text-[#00B856] font-open-sans font-bold text-[14px] pr-[5px]'>{secondsToTime(startsFrom)}</span>
          <span className='cursor-pointer text-dark-blue font-open-sans font-bold text-[14px]'>Стратегии продвижения на рынке.</span>
          <p className='cursor-pointer w-[685px] text-dark-blue font-open-sans font-normal text-[14px]'
             dangerouslySetInnerHTML={{__html: fragment.content}}/>
        </div>
      </div>
  );
};
