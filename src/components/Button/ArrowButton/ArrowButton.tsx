import { Wrapper } from './PlusButton.styled';

import React from 'react';
import ArrowRight from "@/components/SVGIcons/Arrows/ArrowRight";
import ArrowLeft from "@/components/SVGIcons/Arrows/ArrowLeft";

interface PlusButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'left' | 'right';
  className?: string;
}

export const ArrowButton: React.FC<PlusButtonProps> = ({ onClick, variant = 'left', className }) => {
  return (
    <Wrapper onClick={onClick} variant="withIcon" className={className}>
      {variant === 'right' ? <ArrowRight stroke='#1F2D3D'/> : <ArrowLeft stroke='#1F2D3D'/>}
    </Wrapper>
  );
};
