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
      text: "Как говорил 1 мудрец, солнце светит всем одинаково.",
      start: '00:00:00',
      title: ""
    },
    quiz: [
      {
        correctAnswer: "Солнце светит всем одинаково.",
        question: "Что говорил 1 мудрец?",
        wrongAnswers: [
          "Солнце светит только избранным.",
          "Солнце светит всем одинаково.",
          "Солнце светит в зависимости от настроения мудреца."
        ]
      }
    ]
  },
  {
    chapter: {
      text: "Так что за бардак у вас, а?",
      start: '00:00:29',
      title: ""
    },
    quiz: [
      {
        correctAnswer: "Неизвестный.",
        question: "Кто возмущается беспорядком?",
        wrongAnswers: [
          "Автор.",
          "Друг.",
          "Неизвестный."
        ]
      }
    ]
  },
  {
    chapter: {
      text: "Без машины никуда.",
      start: '00:00:57',
      title: ""
    },
    quiz: [
      {
        correctAnswer: "Машина",
        question: "Что нужно человеку, чтобы поехать куда-либо?",
        wrongAnswers: [
          "Машина",
          "Велосипед.",
          "Трамвай."
        ]
      }
    ]
  },
  {
    chapter: {
      text: "Все твои повара выйдут из кухни.",
      start: '00:02:53',
      title: ""
    },
    quiz: [
      {
        correctAnswer: "Выйдут из кухни.",
        question: "Что произойдёт с поварами?",
        wrongAnswers: [
          "Выйдут из кухни.",
          "Останутся на кухне.",
          "Уйдут домой.",
        ]
      }
    ]
  },
  {
    chapter: {
      text: "Заподозрит обман и попросит всех выйти.",
      start: '00:04:12',
      title: ""
    },
    quiz: [
      {
        correctAnswer: "Попросит всех выйти.",
        question: "Что сделает человек, заподозривший обман?",
        wrongAnswers: [
          "Ничего не сделает.",
          "Попросит всех выйти.",
          "Начнёт спорить.",
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
