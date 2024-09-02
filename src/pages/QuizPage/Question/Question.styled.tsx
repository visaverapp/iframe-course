import styled, { css } from 'styled-components';
import Button from "@/components/Button/Button";

// import { TitleH4, theme } from '@/styles';

export const QuizStyled = styled.div`
  position: relative;
  min-height: 345px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 30px;
  width: 100%;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const TitleWrapper = styled.div`
  width: 77%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const AnswersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 75%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const VisibleAnswer = styled.button<{ answerType?: 'correct' | 'incorrect' }>`
  //border-radius: 10px;
  //border-width: 2px;
  //border-style: solid;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //
  //user-select: none;
  //cursor: pointer;

  //font-weight: 700;
  //font-size: 17px;
  //line-height: 24px;
  //color: #F4F4F4;

  //padding: 12px 30px;

  //@media screen and (max-width: 480px) {
  //  padding: 6px 15px;
  //}
  @keyframes correct-animation {
    0% {
      background-color: #F4F4F4;
      border-color: #F4F4F4;
    }
    100% {
      background-color: #DDF4C7;
      border-color: #DDF4C7;
    }
  }

  @keyframes incorrect-animation {
    0% {
      background-color: #F4F4F4;
      border-color: #F4F4F4;
    }
    100% {
      border-color: #F4C7C7;
      background-color: #F4C7C7;
    }
  }

  ${({ answerType }) => {
    switch (answerType) {
      case 'correct':
        return css`
          border-color: #DDF4C7;
          background-color: #DDF4C7;
          animation-name: correct-animation;
          /* &:active {
             
            animation-name: correct-animation;
            animation-duration: 0.2s;
            animation-iteration-count: 5;
            animation-timing-function: ease;
          } */
          &:active {
            animation-name: correct-animation;
            animation-duration: 0.2s;
            animation-iteration-count: 5;
            animation-timing-function: ease;
          }
        `;
      case 'incorrect':
        return css`
          border-color: #F4C7C7;
          background-color: #F4C7C7;
          /* :active {
            
            animation-name: incorrect-animation;
            animation-duration: 0.2s;
            animation-iteration-count: 5;
            animation-timing-function: ease;
          } */
          &:active {
            animation-name: incorrect-animation;
            animation-duration: 0.2s;
            animation-iteration-count: 5;
            animation-timing-function: ease;
          }
        `;
      default:
        return css`
          border-color: #F4F4F4;
          background-color: #F4F4F4;
        `;
    }
  }}
  &:hover {
    scale: 1.01;
    transition: scale 0.35s;
  }
  &:active {
    scale: 0.95;
    transition: 0.1s;
  }

  &:disabled {
    cursor: auto;

    :hover,
    :active {
      scale: 1;
    }
  }
`;

// export const Title = styled(TitleH4)`
//   font-weight: 700;
//   text-transform: uppercase;
// `;
export const QuestionHeader = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;
export const QuestionBody = styled(QuestionHeader)``;

export const ControlWrapper = styled.div`
  display: flex;
  gap: 20px;
  max-height: 42px;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;
export const ControlButton = styled(Button)`
  cursor: pointer;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(228, 228, 255);
  padding: 13px 39px;

  &:hover {
    scale: 1.03;
    transition: scale 0.5s;
  }
  &:active {
    scale: 0.95;
    transition: 0.2s;
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
    background-color: #9197a3;
    
    :hover,
    :active {
      scale: 1;
    }
  }
`;
export const SeekToButton = styled(Button)`
  padding: 8px 20px;
  height: 37px;
  margin-bottom: 30px;
  @media screen and (max-width: 1024px) {
    padding: 8px 10px;
  }
`;
