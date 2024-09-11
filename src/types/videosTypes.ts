export interface CreateVideoType {
  originLink: string;
}

export interface Video {
  publicId: string;
  title: string;
  videoId: string;
  source: string;
  originLink: string;
  startsFrom: number;
  description: string;
  thumbnailUrl: string;
  purpose: string;
  quizIds: string[];
}

export interface BaseAdminRequest {
  videoPk: string;
}

export interface SummariesRequest extends BaseAdminRequest {
  playlistPk: string;
}

export type SuggestVideoType = Pick<Video, 'title' | 'thumbnailUrl' | 'publicId'>;

export interface PersonalMovie extends Video {
  uploader: {
    id: number;
  };
}

export type CreateMoviesType = Omit<Video, 'id' | 'updated_at'>;

export interface SearchAIMovie extends Omit<PersonalMovie, 'uploader'> {
  score: number;
  timestamp_link: string;
}

export interface SearchAI {
  info: {
    count: number;
    pages: number;
    next: null | number;
    prev: null | number;
  };
  result: SearchAIMovie[];
}

export interface SearchAIBack {
  count: number;
  next: null | string;
  prev: null | string;
  result: SearchAIMovie[];
}
