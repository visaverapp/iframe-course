import { FragmentCardProps } from './FragmentCard.props';
import { VideoImageWrapper, Description, FragmentCardStyled, Time } from './FragmentCard.styled';
import {memo} from "react";

export const FragmentCard = memo(({ background_image, content = '' }: FragmentCardProps) => {
  return (
    <FragmentCardStyled>
      <VideoImageWrapper background_image={background_image} />
      <Time>00:05:14 Пример: анализ рынка доставки пиццы</Time>
      <Description dangerouslySetInnerHTML={{ __html: content.slice(0, 55) + '...' }} />
    </FragmentCardStyled>
  );
});
