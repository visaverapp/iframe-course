import {useRef, useState} from "react";
import {
  SearchInVideoInput
} from "@/components/SearchTimecodesVideoInput/SearchInVideoInput";
import {Timecodes} from "@/pages/VideoPage/Timecodes/Timecodes";
import YouTube from "react-youtube";
import QuizPage from "@/pages/QuizPage/QuizPage";
import {DescriptionTextVideo} from "@/pages/DescriptionTextVideo/DescriptionTextVideo";


const video = {
  "publicId": "011701ad-8cf3-4346-b0f0-7c8d292c29ad",
  "title": "Кухня | Сезон 3 | Серия 55",
  "videoId": "Ge7PcD8hQ-0",
  "source": "YOUTUBE",
  "originLink": "https://youtube.com/watch?v=Ge7PcD8hQ-0",
  "startsFrom": 0,
  "description": "Нагиев поспорил со знакомым, что сможет приготовить кролика с розмарином. Официанты помогают ему выйти из неловкой ситуации. Вика сообщает Косте, что уезжает в другую страну.\n\nМаксим Лавров — молодой провинциальный парень из Воронежа, всю сознательную жизнь грезящий о карьере высококлассного повара. Своими кулинарными талантами он удивляет близких и даже из скудного набора армейских продуктов умудряется создавать шедевры. Однажды судьба предоставляет ему шанс: военную часть посещает звезда шоу-бизнеса Дмитрий Нагиев, который, попробовав несколько блюд амбициозного парня, оставляет ему свою визитку. Закончив службу, Максим остается в Москве и пытается устроиться на работу в шикарный столичный ресторан «Claude Mone», владельцем которого и является Дмитрий.\n\nНа новом месте его встречает гениальный шеф-повар Виктор Баринов, способный даже из картошки сделать блюдо, за которым будет выстраиваться очередь. Правда есть одно но: человек он достаточно специфический, взбалмошный, нервный и азартный, а его необузданный характер за много лет никто так и не смог усмирить.\n\nНаблюдая за интригами, разворачивающимися на кухне, терпя насмешки от младшего персонала, преодолевая последствия подстав и издевательств, Максим будет пытаться добиться доверия и расположения Баринова, ведь только он решает кому достанется роль чистильщика картошки, а кому — исполнителя сложного блюда. Смотри сериал «Кухня» онлайн и следи за тем, как будут развиваться события в жизни главного героя.",
  "thumbnailUrl": "https://i.ytimg.com/vi/Ge7PcD8hQ-0/sddefault.jpg",
  "purpose": "PERSONAL",
  "quizIds": [
    "ac4f2bcd-6451-4eb0-828e-507ce3b2b181"
  ]
}

// const searchVideos = []


export const VideoPage = () => {
  const [tab, setTab] = useState(1)
  const [isActiveInput, setIsActiveInput] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true);
  // const [currentTime] = useState(null);


  const iframe = useRef<YouTube>(null);
  const iframeWrapper = useRef<HTMLDivElement>(null);
  const vkRef = useRef<HTMLIFrameElement>(null);

  const onChange = (value: boolean) => {
    setIsActiveInput(value)
    setIsCollapsed(false)
  }

  const playlistId = 'c92ce130-e837-4db3-8278-638fca4b9f9a'
  const id = '011701ad-8cf3-4346-b0f0-7c8d292c29ad'
  const startsForm = 0


  return (
      <section>
        {/*{isLoading && <FullScreenLoader />}*/}
        {video && (
            <div className='flex flex-col gap-[12px]'>
              <div ref={iframeWrapper}>
                {video.source === 'YOUTUBE' && (
                    <YouTube iframeClassName='w-[-webkit-fill-available] h-[404px]'
                             videoId={video.videoId}
                             title={video.title}
                             ref={iframe}
                    />
                )}

                {video.source === 'VK' && (
                    <iframe
                        ref={vkRef}
                        title={video.title}
                        src={`${video.originLink}&hd=2&autoplay=14&t=${video.startsFrom || startsForm}s&js_api=1`}
                        width="100%"
                        height="500px"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                    ></iframe>
                )}
              </div>
              <p className='font-open-sans font-bold text-[16px] text-dark-blue'>{video.title}</p>

              <div>
                {playlistId && (
                    <>
                      <div className='flex gap-[12px]'>
                        <SearchInVideoInput onChange={onChange}/>
                        {!isActiveInput &&
                            <div className='flex border-white-active border-[1px] rounded-[12px] bg-white'>
                                 <span className={`${tab === 1 ? 'bg-green-active font-bold text-white' : 'bg-white font-normal text-dark-blue'} cursor-pointer block pl-[24px] pr-[40px] py-[8px] font-open-sans rounded-[12px] text-center w-[120px] h-[40px] text-[14px] content-evenly`} onClick={() => setTab(1)}>Таймкоды</span>
                                <span className={`${tab === 2 ? 'bg-green-active font-bold text-white' : 'bg-white font-normal text-dark-blue'} cursor-pointer block px-[26px] py-[8px] font-open-sans rounded-[12px] text-center w-[120px] h-[40px] text-[14px] content-evenly`} onClick={() => setTab(2)}>Описание</span>
                                <span className={`${tab === 3 ? 'bg-green-active font-bold text-white' : 'bg-white font-normal text-dark-blue'} cursor-pointer block px-[26px] py-[8px] font-open-sans rounded-[12px] text-center w-[116px] h-[40px] text-[14px] content-evenly`} onClick={() => setTab(3)}>Тест</span>
                            </div>
                        }
                      </div>

                      {/*{searchVideos && (*/}
                      {/*    <div>*/}
                      {/*      {searchVideos &&*/}
                      {/*          searchVideos.map((fragment) =>*/}
                      {/*              fragment.cues.map((cue, i) => {*/}
                      {/*                if (fragment.publicId === video.publicId) {*/}
                      {/*                  return (*/}
                      {/*                      <VideoFragmentCard*/}
                      {/*                          fragment={cue}*/}
                      {/*                          key={fragment.publicId + i}*/}
                      {/*                          // goToTime={goToTime}*/}
                      {/*                          videoPreview={fragment.thumbnailUrl}*/}
                      {/*                      />*/}
                      {/*                  );*/}
                      {/*                }*/}
                      {/*              }),*/}
                      {/*          )}*/}
                      {/*    </div>*/}
                      {/*)}*/}
                      {/*{isSearchLoading && <FullScreenLoader />}*/}
                    </>
                )}
              </div>
              {tab === 1 ? <Timecodes/> :
                  tab === 2 ? <DescriptionTextVideo />
                      : tab === 3 ? <QuizPage></QuizPage> : <></> }

            </div>
        )}
      </section>
  );
};
