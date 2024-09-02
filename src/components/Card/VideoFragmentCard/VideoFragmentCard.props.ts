import { Cue } from '@/types';

export interface VideoFragmentCardProps {
  // fragment: VideoWithFragments;
  fragment: Cue;
  goToTime?: (time: number) => void;
  videoPreview?: string | null;
}
