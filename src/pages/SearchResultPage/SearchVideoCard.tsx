import {VideoCard} from "@/components/VideoCard/VideoCard";

interface SearchVideoCardProps {
  video: any
}

export const SearchVideoCard = ({video}:SearchVideoCardProps) => {
  return (
      <div className='p-[20px] ml-[14px] mb-[12px] flex gap-[32px] bg-white rounded-[12px] w-[1312px] h-[248px]'>
        <VideoCard video={video} iframeClassName='w-[320px] h-[208px] rounded-[12px]' />
        <p className='font-open-sans font-normal text-[14px] text-indigo pt-[30px]'>SWOT-анализ — это анализ сильных и слабых сторон, возможностей и угроз. Он дает полную картину внешних и внутренних факторов, а также положения компании среди конкурентов — все это помогает определить стратегию выхода на рынок или масштабирования бизнеса. Этот метод актуален с 80-х годов и применяется для разработки стратегических решений.</p>
      </div>
  )
};



      // <SearchVideoCardStyled>
      //   <Main>
      //     <Header>
      //       <TitleH4>{title}</TitleH4>
      //     </Header>
      //     <DescriptionText>{description || ''}</DescriptionText>
      //     <InfoList>
      //       {cues.map(({ content, timestampLink }, i) => (
      //         <StyledLink key={i} to={`${publicId}?t=${parseInt(timestampLink)}`} state={`${location.pathname}`}>
      //           <Info>
      //             <InfoText>{secondsToTime(parseInt(timestampLink))}</InfoText>
      //             <InfoText dangerouslySetInnerHTML={{ __html: content }} />
      //           </Info>
      //         </StyledLink>
      //       ))}
      //     </InfoList>
      //   </Main>
      // </SearchVideoCardStyled>
  // );
// };
