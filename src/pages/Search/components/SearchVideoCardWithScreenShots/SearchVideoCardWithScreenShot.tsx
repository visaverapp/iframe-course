import {Video} from "@/types";
import {
  Header, HeaderContent, Main,
  SearchVideoCardStyled, Title,
} from "@/pages/Search/components/SearchVideoCardWithScreenShots/SearchVideoCardWithScreenShot.styled";
import InnerSlider from "@/pages/SearchResultPage/InnerSlider/InnerSlider";
import StyledLink from "@/components/StyledLink/StyledLink";
import {VideoCard} from "@/components/VideoCard/VideoCard";

interface SearchVideoCardProps {
  videoInfo: Video;
}

const video = {
  "publicId": "c2bf1bff-13ec-4090-aa56-c50b5eb364da",
  "title": "Система. ПРО бизнес.",
  "videoId": "DmuB41GNl5U",
  "source": "YOUTUBE",
  "originLink": "https://www.youtube.com/watch?v=DmuB41GNl5U",
  "startsFrom": 0,
  "description": "Анализ. Когда и зачем анализировать рынок.",
  "thumbnailUrl": "https://i.ytimg.com/vi/DmuB41GNl5U/sddefault.jpg",
  "purpose": "PERSONAL",
  "quizIds": [
    "ac4f2bcd-6451-4eb0-828e-507ce3b2b181"
  ]
}

export const SearchVideoCardWithScreenShot = ({ videoInfo }: SearchVideoCardProps) => {
  const { publicId, title } = videoInfo;
  // const [isCollapsed, setIsCollapsed] = useState(false);
  // const [file, setFile] = useState<Blob | null>(null);

  // const [getDocs, { data, isSuccess, isLoading }] = useLazyGetDocsQuery();

  // const fetchDoc2 = async () => {
    // const response = await getDocs(publicId).unwrap();
    // const a = document.createElement('a');
    // a.href = response;
    // a.download = `${videoId}.pdf`;
    // a.click();
  // };

  return (
    <>
      <SearchVideoCardStyled>
        <Header>
          <HeaderContent>
            <StyledLink to={`${publicId}`}>
              <VideoCard video={video} iframeClassName='w-[320px] h-[208px] rounded-[12px]'/>
            </StyledLink>
          </HeaderContent>
        </Header>
        <Main>
          <Title>{title}</Title>
          <p className='mb-[10px] font-open-sans font-normal text-indigo text-[14px]'>Рассматриваем популярные и полезные сервисы для исследований, в которых вам не нужно никого опрашивать, ни за кем наблюдать и ни над кем экспериментировать.</p>
          <p className='mb-[10px] font-normal font-open-sans text-[#A2A2A9] text-[16px]'>Подходящие фрагменты: 5</p>
          <InnerSlider items={videoInfo} />
        </Main>
      </SearchVideoCardStyled>
    </>
  );
};
