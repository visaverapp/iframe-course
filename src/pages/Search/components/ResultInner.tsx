import {Video} from "@/types";
import FullScreenLoader from "@/components/FullScreenLoader/FullScreenLoader";
import {
  ResultVideoInnerWithScreenShot
} from "@/pages/Search/components/ResultVideoInnerWithScreenShot/ResultVideoInnerWithScreenShot";

interface ResultInnerProps {
  data?: Video[];
  isLoading: boolean;
}

export const ResultInner = ({ data = [], isLoading }: ResultInnerProps) => {
  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
      <ResultVideoInnerWithScreenShot videos={data} />
  );
};
