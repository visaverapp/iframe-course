import {useRef} from "react";
import YouTube from "react-youtube";
import {Video} from "@/types/videosTypes";

interface VideoCardProps {
  video: Video
  iframeClassName: string
}

export const VideoCard = ({video, iframeClassName}:VideoCardProps) => {
  const iframe = useRef<YouTube>(null);
  const iframeWrapper = useRef<HTMLDivElement>(null);
  // const vkRef = useRef<HTMLIFrameElement>(null);

  // const playlistId = 'c92ce130-e837-4db3-8278-638fca4b9f9a'
  // const startsForm = 0

  return (
      <div ref={iframeWrapper}>
        {video && (
            <YouTube iframeClassName={iframeClassName}
                     videoId={video.videoId}
                     title={video.title}
                     ref={iframe}
            />
        )}
      </div>
  );
};

