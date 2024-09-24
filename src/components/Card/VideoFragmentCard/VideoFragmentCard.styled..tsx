import styled from "styled-components";
import {PlaylistCardStyleProps} from "@/components/Card/VideoFragmentCard/VideoFragmentCard.props";
import {theme} from "@/styles";

export const ImageWrapper = styled.div<PlaylistCardStyleProps>`
  background-color: ${theme.colors.White};
  background-image: url(${({ bgImage }) => `${bgImage}`});
  background-size: cover;
  background-position: center center;
  border-radius: 20px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const ImageFragmentWrapper = styled(ImageWrapper)`
  height: 200px;
`;

export const PlayButton = styled.button`
    position: absolute;
    left: 50%;
    top: 30%;
    z-index: 10;
    opacity: 0.3;
    transform: translate(-50%, -50%);
`;
