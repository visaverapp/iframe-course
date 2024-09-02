import { createSlice } from '@reduxjs/toolkit';

import { QuizAdmin } from '@/types/adminTypes';

const initialState = {
  questions: [] as QuizAdmin[],
};

export const quizAdminSlice = createSlice({
  name: 'quizAdmin',
  initialState,
  reducers: {
    addTheWholeQuiz: (state, action) => {
      state.questions = action.payload;
    },
    addBlock: (state) => {
      state.questions.push({ question: '', answers: [] });
    },
    addQuestion: (state, action) => {
      const { questionIndex, newQuestion } = action.payload;
      if (state.questions[questionIndex]) {
        state.questions[questionIndex].question = newQuestion;
      } else {
        console.error(`Question at index ${questionIndex} does not exist.`);
      }
    },
    addAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      if (state.questions[questionIndex]) {
        state.questions[questionIndex].answers.push({ answer: answer, isCorrect: false });
      } else {
        console.error(`Question at index ${questionIndex} does not exist.`);
      }
    },
    updateAnswer: (state, action) => {
      const { questionIndex, answerIndex, newAnswer } = action.payload;
      if (state.questions[questionIndex]) {
        state.questions[questionIndex].answers[answerIndex].answer = newAnswer;
      } else {
        console.error(`Question at index ${questionIndex} does not exist.`);
      }
    },
    removeAnswer: (state, action) => {
      const { questionIndex, answerIndex } = action.payload;
      console.log(questionIndex, answerIndex);
      state.questions[questionIndex].answers = state.questions[questionIndex].answers.filter(
        (_, index) => index !== answerIndex,
      );
    },
    toggleCorrect: (state, action) => {
      const { questionIndex, answerIndex } = action.payload;
      const answer = state.questions[questionIndex].answers[answerIndex];
      if (answer) {
        answer.isCorrect = !answer.isCorrect;
      }
    },
  },
});

export const { addTheWholeQuiz, addQuestion, addAnswer, updateAnswer, removeAnswer, toggleCorrect, addBlock } =
  quizAdminSlice.actions;

export default quizAdminSlice.reducer;
