///--------------------------------------///

export interface AccountStat {
  id: number;
  name: string;
  background_image: string;
  description: string;
  link: string;
  likes_count: number;
  views_count: number;
  reposts_count: number;
  comments_count: number;
  bookmarked_count: number;
  movie_count: number;
}

// type ListType = PersonalPlaylist | PublicPlaylist | PublicMovie | PersonalMovie | AccountStat | SearchAIMovie;

export interface GetList<T> {
  count: number;
  next: null | number;
  previous: null | number;
  results: T[];
}

export type SharingType = 'public' | 'by_link' | 'private';

export interface GetMovieInPL {
  background_img_link: string;
  id: number;
  movie_id: string;
  origin: string;
  time: number;
  title: string;
}

export interface GetAccountUser {
  avatar?: string | null;
  username: string;
  email: string;
  publicId: string;
  isCommercial: boolean;
}
export interface UpdateAccountUser {
  avatar?: string | FileList | null;
  // avatar?: File | FileList | null;
  username: string;
  email: string;
  newPassword?: string;
  currentPassword?: string;
  publicId: string;
}

export interface UserPlaylistRelation {
  is_liked?: boolean;
  is_reposted?: boolean;
  is_viewed?: boolean;
  is_in_bookmarks?: boolean;
  user?: number | string;
  playlist?: number | string;
  comments?: [];
}

export interface UserPlaylistRelationResponse extends Required<UserPlaylistRelation> {
  id: number;
}

export type NotificationType = {
  isShow: boolean;
  text: string;
  severity: 'error' | 'success' | undefined;
};
