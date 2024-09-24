export interface FragmentCardProps {
  background_image?: string;
  content?: string;
  timeStamp?: string;
  goToTime?: (time: number) => void;
}
