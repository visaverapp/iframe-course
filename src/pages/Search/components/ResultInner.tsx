import {Video} from "@/types";
import FullScreenLoader from "@/components/FullScreenLoader/FullScreenLoader";

interface ResultInnerProps {
  data?: Video[];
  isLoading: boolean;
}

export const ResultInner = ({ isLoading }: ResultInnerProps) => {
  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
      <></>
      // <ResultVideoInnerWithScreenShot videos={data} />
  );
};
