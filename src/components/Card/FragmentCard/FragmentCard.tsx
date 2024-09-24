import {FragmentCardProps} from './FragmentCard.props';
import {Description, FragmentCardStyled, VideoImageWrapper} from './FragmentCard.styled';
import {memo} from "react";
import {PlayButton} from "@/components/Card/VideoFragmentCard/VideoFragmentCard.styled.";
import PlayIcon from "@/components/SVGIcons/PlayIcon";

export const FragmentCard = memo(({ background_image, content = '', timeStamp }: FragmentCardProps) => {
  return (
      <FragmentCardStyled>
          <PlayButton>
            <PlayIcon />
          </PlayButton>
        <VideoImageWrapper background_image={background_image} />
        <span className='font-bold font-open-sans text-[16px] text-[#6F42C1]'>{timeStamp}</span>
        <Description dangerouslySetInnerHTML={{ __html: content.slice(0, 55) + '...' }} />
      </FragmentCardStyled>
  );
});