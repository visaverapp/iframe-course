import { Video } from './videosTypes';

export interface Category {
  image: string | null;
  name: CategoryName;
  publicId: string;
}

export type CategoryName =
  | 'work'
  | 'languages'
  | 'music'
  | 'education'
  | 'recipes'
  | 'cinema'
  | 'psychology'
  | 'humor'
  | 'sport'
  | 'hobby'
  | 'children';

export type PrivacyType = 'public' | 'private';

export type PlaylistIdType = string | number;

interface Owner {
  publicId: string;
  username: string;
  avatar: string;
}

export interface Playlist {
  availabilityStatus: 'active' | 'bunned';
  category: Category;
  description: string;
  listAiSuggestedVideoPks: string[];
  owner: Owner;
  privacyType: 'public' | 'private';
  status: 'active' | 'deleted' | 'hidden';
  publicId: string;
  purpose: string;
  title: string;
  videos: VideoInPlaylist[];
}

export type VideoInPlaylist = Pick<Video, 'publicId' | 'title' | 'thumbnailUrl'> & { startsFrom?: number };

export type PersonalPlaylist = Playlist;

export type UserPlaylist = Playlist;

export interface CreatePlaylistType {
  title: string;
  category: string;
  description: string;
  privacyType: PrivacyType;
}

export interface CreatePlaylistForm extends Omit<CreatePlaylistType, 'category'> {
  category: string;
}

export interface EditPlaylist {
  id: number;
  name: string;
  description: string;
  privacyType: PrivacyType;
}

export interface PlaylistMovie {
  playlist: PlaylistIdType;
  movies: number[];
  // videos: number[];
}

export type PartialUpdatePlaylist = Partial<CreatePlaylistType>;

type Description = (string | [])[];

export interface FullSearchResponse {
  playlist: string;
  querywas: string;
  response: VideoWithFragments[];
}
export interface VideoWithFragments {
  publicId: string;
  title: string;
  videoId: string;
  startsFrom: number;
  created: string;
  thumbnailUrl: string;
  originLink: string;
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

export interface TimecodesResponse {
  count: number;
  next: object;
  previous: object;
  results: Results[];
}

export type TransformedTimecodesResponse = {
  timecodes: Timecode[];
  publicId: string;
};

export type Results = {
  data: ResultsData;
  publicId: string;
};

type ResultsData = {
  timecodes: Timecode[];
};

export interface Timecode {
  start: number;
  text: string;
  title: string;
}

export type SummaryResponse = {
  count: number;
  next: string;
  previous: string;
  results: SummaryResponseResults[];
};

type SummaryResponseResults = {
  pdfFile: string;
  markdown: string
  publicId: string;
};

export type TimecodesRequest = {
  playlistId: string;
  videoPublicId: string;
};
