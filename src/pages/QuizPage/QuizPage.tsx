import {Quiz} from "@/pages/QuizPage/Quiz";

const video = {
  originLink:"https://youtube.com/watch?v=Ge7PcD8hQ-0",
  publicId:"011701ad-8cf3-4346-b0f0-7c8d292c29ad",
  purpose:"PERSONAL",
  quizIds:["ac4f2bcd-6451-4eb0-828e-507ce3b2b181"],
  source:"YOUTUBE",
  startsFrom:0,
  thumbnailUrl:"https://i.ytimg.com/vi/Ge7PcD8hQ-0/sddefault.jpg",
  title:"Кухня | Сезон 3 | Серия 55",
  videoId:"Ge7PcD8hQ-0",
};

const playlistId = 'c92ce130-e837-4db3-8278-638fca4b9f9a'

const QuizPage = () => {

  // const player = useRef<YouTube>(null);
  // const iframeWrapper = useRef<HTMLDivElement>(null);

  return (
    // <>
    //   {video && (
        <div>
          {/*<div ref={iframeWrapper}>*/}
          {/*  <YouTube*/}
          {/*    videoId={video.videoId}*/}
          {/*    title={video.title}*/}
          {/*    ref={player}*/}
          {/*    style={{ width: '100%' }}*/}
          {/*  />*/}
          {/*</div>*/}
          {video && video.quizIds.length > 0 ? (
            <Quiz publicId={video.quizIds[0]} playlistId={playlistId} goToTime={()=>{}} />
          ) : (
              <div>
                <span>Загрузка...</span>
              </div>
          )}
        </div>
      // )}
    // </>
  );
};

export default QuizPage;
