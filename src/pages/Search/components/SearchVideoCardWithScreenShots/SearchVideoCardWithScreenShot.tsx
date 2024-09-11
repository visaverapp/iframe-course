import {Video, VideoWithFragments} from "@/types";
import {
  Header, HeaderContent, Main,
  SearchVideoCardStyled, Title,
} from "@/pages/Search/components/SearchVideoCardWithScreenShots/SearchVideoCardWithScreenShot.styled";
import InnerSlider from "@/pages/SearchResultPage/InnerSlider/InnerSlider";
import StyledLink from "@/components/StyledLink/StyledLink";
import {VideoCard} from "@/components/VideoCard/VideoCard";
import {playlistsAPI} from "@/api";

interface SearchVideoCardProps {
  videoInfo: VideoWithFragments;
}

// const video = {
//   "publicId": "c2bf1bff-13ec-4090-aa56-c50b5eb364da",
//   "title": "Система. ПРО бизнес.",
//   "videoId": "DmuB41GNl5U",
//   "source": "YOUTUBE",
//   "originLink": "https://www.youtube.com/watch?v=DmuB41GNl5U",
//   "startsFrom": 0,
//   "description": "Анализ. Когда и зачем анализировать рынок.",
//   "thumbnailUrl": "https://i.ytimg.com/vi/DmuB41GNl5U/sddefault.jpg",
//   "purpose": "PERSONAL",
//   "quizIds": [
//     "ac4f2bcd-6451-4eb0-828e-507ce3b2b181"
//   ]
// }

export const SearchVideoCardWithScreenShot = ({ videoInfo }: SearchVideoCardProps) => {
  return (
    <>
      <SearchVideoCardStyled>
        <Header>
          <HeaderContent>
            <StyledLink to={`${videoInfo.originLink}`}>
              <VideoCard video={videoInfo} iframeClassName='w-[320px] h-[208px] rounded-[12px]'/>
            </StyledLink>
          </HeaderContent>
        </Header>
        <Main>
          <Title>{videoInfo.title}</Title>
          {/*<p className='mb-[10px] font-open-sans font-normal text-[#696977] text-[14px]'>{video.description}</p>*/}
          <p className='mb-[10px] font-bold font-open-sans text-[#000000] text-[16px]'>Подходящие фрагменты: 5</p>
          <InnerSlider items={videoInfo} />
        </Main>
      </SearchVideoCardStyled>
    </>
  );
};
