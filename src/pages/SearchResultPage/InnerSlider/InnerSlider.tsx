import { Slide, SliderContainer, SliderStyled } from './InnerSlide.styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Video } from '@/types';
import StyledLink from "@/components/StyledLink/StyledLink";
import {FragmentCard} from "@/components/Card/FragmentCard/FragmentCard";
import {ArrowButton} from "@/components/Button/ArrowButton/ArrowButton";
import {secondsToTime} from "@/pages/Search/utils";
type InnerSliderProps = {
  items: Video;
};

const InnerSlider = ({ items }: InnerSliderProps) => {
  // const settings = {
  //   accessibility: true,
  //   arrows: true,
  //   dots: false,
  //   infinite: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 0,
  //   speed: 2000,
  //   swipeToSlide: true,
  //   draggable: true,
  //   centerMode: true,
  //   // centerPadding: '-20',

  // };

  const settings = {
    dots: false,
    infinite: false,

    speed: 500,
    slidesToScroll: 1,
    nextArrow: items.cues.length > 3 ? <ArrowButton variant="right" /> : <></> ,
    prevArrow: <ArrowButton />,
    variableWidth: true,

    accessibility: true,
    swipeToSlide: true,

    responsive: [
      //  {
      //    breakpoint: 1200,
      //    settings: {
      //      slidesToShow: 3,
      //    },
      //  },
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: items.cues.length > 1 ? 2 : 1,
      //     centerPadding: '10px',
      //     centerMode: true,
      //   },
      // },
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: items.cues.length > 1 ? 2 : 1,
      //     centerPadding: '10px',
      //     centerMode: true,
      //   },
      // },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: items.cues.length > 1 ? 2 : 1,
      //     centerPadding: '10px',
      //     centerMode: true,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     centerPadding: '10px',
      //     centerMode: true,
      //   },
      // },
      // {
      //   breakpoint: 410,
      //   settings: {
      //     centerPadding: '40px',
      //     slidesToShow: 1,
      //     centerMode: true,
      //   },
      // },
    ],
  };

  if (items.cues.length === 0) {
    return null;
  }

  // console.log(items.cues)

  return (
      <SliderContainer>
        <SliderStyled {...settings} className="slider" cssEase="linear">
          {items.cues.map(({ content, timestampLink ,image}, i) => (
              <div key={i}>
                <Slide index={i}>
                  <StyledLink to={'/'} state={{ fromSearch: true }}>
                    <FragmentCard
                        background_image={`https://visaver.online${image}`}
                        timeStamp={secondsToTime(parseInt(timestampLink))}
                        content={content}
                    />
                  </StyledLink>
                </Slide>
              </div>
          ))}
        </SliderStyled>
      </SliderContainer>
  );
};

export default InnerSlider;
