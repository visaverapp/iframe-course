import { FragmentCardProps } from './FragmentCard.props';
import { VideoImageWrapper, Description, FragmentCardStyled } from './FragmentCard.styled';
import {memo} from "react";

export const FragmentCard = memo(({ background_image, content = '', timeStamp }: FragmentCardProps) => {
  return (
      <FragmentCardStyled>
        <VideoImageWrapper background_image={background_image} />
        <span className='font-bold font-open-sans text-[16px] text-[#6F42C1]'>{timeStamp}</span>
        <Description dangerouslySetInnerHTML={{ __html: content.slice(0, 55) + '...' }} />
      </FragmentCardStyled>
  );
});