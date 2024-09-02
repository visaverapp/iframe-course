import { Timecode } from './playlistTypes';

export interface BaseAdminRequest {
  videoPk: string;
}

export interface BaseTimecodesRequest extends BaseAdminRequest {
  publicId: string;
  body: BasePutTimecodesRequest;
}

export interface SummariesRequest extends BaseAdminRequest {
  playlistPk: string;
}

export interface QuizAdmin {
  question: string;
  answers: QuizAnswersType[];
}

export type QuizAnswersType = {
  answer: string;
  isCorrect: boolean;
};

export type newQuizAdmin = {
  quiz: QuizSectionAdmin[];
  chapter?: ChapterQuizAdmin;
};

export type QuizSectionAdmin = {
  question: string;
  wrong_answers: string[];
  correct_answer: string;
};

export type ChapterQuizAdmin = {
  text: string;
  start: number;
  title: string;
};

export interface BasePutTimecodesRequest {
  data: TimecodesPut;
}

interface TimecodesPut {
  timecodes: Timecode[];
}
