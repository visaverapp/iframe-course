import { VideoFragmentCardProps } from './VideoFragmentCard.props';

import PlayIcon from "@/components/SVGIcons/PlayIcon";

export const VideoFragmentCard = ({
  fragment: { content, timestampLink },
  goToTime,
}: VideoFragmentCardProps) => {
  const startsFrom = parseInt(timestampLink);

  const goToHandler = () => {
    goToTime?.(startsFrom);
  };

  return (
    <div onClick={goToHandler}>
      <div className='w-full'>
        {/* bgImage={(image && getImageUrl(image)) || videoPreview || '/images/playlist_mock.png'}*/}
        <button>
          <PlayIcon />
        </button>
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
        {/*<FragmentTime>{secondsToTime(startsFrom)}</FragmentTime>*/}
        <p className='font-open-sans font-bold text-[16px] text-dark-blue' dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};
