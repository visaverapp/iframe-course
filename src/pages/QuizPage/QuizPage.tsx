import {Quiz} from "@/pages/QuizPage/Quiz";

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
