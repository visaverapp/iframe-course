export interface GetList<T> {
  count: number;
  next: null | number;
  previous: null | number;
  results: T[];
}

type Description = any[]
export interface Video {
  publicId: string;
  title: string;
  videoId: string;
  startsFrom: number;
  created: string;
  thumbnailUrl: string;
  originLink?: string;
  score: number;
  description: Description[];
  cues: Cue[];
}

export interface Cue {
  timestampLink: string;
  image: string;
  durationS: number;
  content: string;
}

export type NotificationType = {
  isShow: boolean;
  text: string;
  severity: 'error' | 'success' | undefined;
};

export interface TimecodesResponse {
  timecodes: Timecode[];
}

export interface Timecode {
  start: number;
  text: string;
}
