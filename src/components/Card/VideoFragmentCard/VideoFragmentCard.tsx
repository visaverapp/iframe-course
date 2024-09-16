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
        <div className='w-[704px]'>
          {/* bgImage={(image && getImageUrl(image)) || videoPreview || '/images/playlist_mock.png'}*/}
          {/*<button>*/}
          {/*  <PlayIcon />*/}
          {/*</button>*/}
          {/* <VideoTime>
          {new Date(startsFrom * 1000).toLocaleTimeString('ru-RU', {
            second: '2-digit',
            minute: '2-digit',
          })}
        </VideoTime> */}
        </div>
        {/* <DescriptionMenuWrapper>
          </DescriptionMenuWrapper> */}
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
