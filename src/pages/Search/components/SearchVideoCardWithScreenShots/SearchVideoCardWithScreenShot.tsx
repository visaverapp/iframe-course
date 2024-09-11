import {
  Header,
  HeaderContent,
  Main,
  SearchVideoCardStyled,
  Title,
} from "@/pages/Search/components/SearchVideoCardWithScreenShots/SearchVideoCardWithScreenShot.styled";
import InnerSlider from "@/pages/SearchResultPage/InnerSlider/InnerSlider";
import StyledLink from "@/components/StyledLink/StyledLink";
import {VideoCard} from "@/components/VideoCard/VideoCard";
import {VideoWithFragments} from "@/types/playlistTypes";

interface SearchVideoCardProps {
  videoInfo: VideoWithFragments;
}


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