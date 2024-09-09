import Slider from 'react-slick';
import styled from 'styled-components';

export const SliderContainer = styled.div`
  background: #E6E6EA;
  max-width: 618px;
  //padding: 40px 0;

  //@media screen and (max-width: 1280px) {
  //  max-width: calc(100vw - 368px - 75px);
  //}
  //@media screen and (max-width: 768px) {
  //  max-width: calc(100vw - 40px);
  //}
`;

export const Slide = styled.div<{ index: number }>`
   //padding-left: ${(props) => (props.index === 0 ? '40px' : '20px')};

  //@media screen and (max-width: 768px) {
  //  padding-left: 20px;
  //}
  //@media screen and (max-width: 400px) {
  //  padding-left: 10px;
  //}
`;

export const SliderStyled = styled(Slider)`
    /* .slick-slide {
        scale: 0.9;
        opacity: 0.8;
        
      }
      .slick-active,.slick-current ~ .slick-slide:nth-child(2) {
        scale: 1;
        opacity: 1;
        
      } */

    .slick-disabled {
        opacity: 0.6;
        background: hsla(0, 0%, 100%, 0.5);

        &:hover {
            background: hsla(0, 0%, 100%, 0.5);
            opacity: 0.6;
        }
    }

    .slick-prev,
    .slick-next {
        background: hsla(145, 100%, 98%, 0.8);
        top: 98px;
    }

    .slick-prev {
        left: 20px;
    }

    .slick-next {
        right: 20px;
    }

    //@media screen and (max-width: 768px) {
    //    .slick-prev {
    //        left: -5px;
    //    }
    //
    //    .slick-next {
    //        right: -5px;
    //    }
    //}
    //@media screen and (max-width: 360px) {
    //    .slick-prev {
    //        left: -10px;
    //    }
    //
    //    .slick-next {
    //        right: -10px;
    //    }
    //}
`;
