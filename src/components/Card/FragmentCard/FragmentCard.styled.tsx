import { FragmentCardProps } from './FragmentCard.props';

import styled from 'styled-components';

import { LabelText } from '@/styles';

export const FragmentCardStyled = styled.div`
    width: 236px;
    height: 224px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    background-color: #ffffff;
    position: relative;

    :hover {
        background: #F4F4F4;
    }
`;

export const VideoTime = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 140%;
  color: #e4e4ff;
  padding: 9px 12px;
  display: flex;
  background: rgba(23, 8, 123, 0.3);
  backdrop-filter: blur(5px);
  width: max-content;
  align-items: center;
  user-select: none;
  margin: 0 auto;
`;

export const VideoImageWrapper = styled.div<Pick<FragmentCardProps, 'background_image'>>`
    background-image: url(${(props) => props.background_image});
    background-size: cover;
    background-position: center;
    height: 128px;
    border-radius: 12px;
    position: relative;
`;

export const Description = styled(LabelText)`
    color: rgb(39, 52, 68);
    font-family: Open Sans, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;
    text-align: left;
`;
export const Time = styled(LabelText)`
    color: rgb(22, 24, 24);
    font-family: "Open Sans",sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    text-align: left;
`;
