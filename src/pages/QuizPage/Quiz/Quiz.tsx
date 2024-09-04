import {Complete} from '../Complete';
import {Question} from '../Question/Question';
import {useAppSelector} from "@/hooks/useStore";

interface QuizProps {
  publicId: string;
  playlistId: string;
  goToTime: () => void;
}

const data = [
  {
    chapter: {
      text: "получение запроса, проведение анализа",
      start: '00:00:00',
      title: ""
    },
    quiz: [
      {
        correctAnswer: "получение запроса, проведение анализа, разработку маркетинговой или другой стратегии, её внедрение, а затем оценку результатов и выводов с последующим повторением цикла",
        question: "Что включается в процесс анализа рынка?",
        wrongAnswers: [
          "получение запроса, проведение анализа, разработку маркетинговой или другой стратегии, её внедрение, а затем оценку результатов и выводов с последующим повторением цикла",
          "получение запроса, проведение анализа, разработку маркетинговой или другой стратегии, её внедрение",
          "разработку маркетинговой или другой стратегии, её внедрение, а затем оценку результатов и выводов с последующим повторением цикла"
        ]
      }
    ]
  },
  {
    chapter: {
      text: "анализ рынка в случае отсутствия аналитического отдела в компании",
      start: '00:00:29',
      title: ""
    },
    quiz: [
      {
        correctAnswer: "продакт-менеджер",
        question: "Кто обычно выполняет анализ рынка в случае отсутствия аналитического отдела в компании?",
        wrongAnswers: [
          "директор по развитию",
          "технический директор",
          "продакт-менеджер"
        ]
      }
    ]
  },
  {
    chapter: {
      text: "метод используется для анализа рынка",
      start: '00:00:57',
      title: ""
    },
    quiz: [
      {
        correctAnswer: "TAM-SAM-SOM",
        question: "Какой метод используется для анализа рынка в данном случае?",
        wrongAnswers: [
          "TAM-SAM-SOM",
          "PESTEL",
          "SWOT"
        ]
      }
    ]
  },
  {
    chapter: {
      text: "при анализе конкурентов",
      start: '00:02:53',
      title: ""
    },
    quiz: [
      {
        correctAnswer: "клиенты, продукты, ценообразование, маркетинговые каналы",
        question: "Что важно учитывать при анализе конкурентов?",
        wrongAnswers: [
          "клиенты, продукты, ценообразование, маркетинговые каналы",
          "тип продукта",
          "доходность",
        ]
      }
    ]
  },
];

export const Quiz = ({ goToTime}: QuizProps) => {
  // const { data, isLoading, error } = useGetVideoQuizQuery({ playlistId: playlistId, videoPublicId: publicId });

  const [activeQuestionIndex, questions, done] = useAppSelector((state) => [
    state.quiz.activeQuestionIndex,
    state.quiz.questions,
    state.quiz.done,
  ]);

  // const {catchError} = useHandlingError();

  // useEffect(() => {
  //   catchError(error);
  // }, [error]);
  //
  // if (error) return null;

  return (
      <div className='w-[709px] p-[20px] border-white-active border-[1px] rounded-[12px] bg-white'>
        {/*{isLoading && <FullScreenLoader/>}*/}

        {data && !done && (
            <Question
                question={questions[activeQuestionIndex].question}
                answers={questions[activeQuestionIndex].answers}
                correctAnswer={questions[activeQuestionIndex].correctAnswer}
                currentAnswer={questions[activeQuestionIndex].answer}
                start={questions[activeQuestionIndex].start}
                goToTime={goToTime}
            />
        )}
        {done && <Complete/>}
      </div>
  );
};
