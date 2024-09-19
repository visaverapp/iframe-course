import {memo, useRef} from "react";
import YouTube from "react-youtube";

interface VideoCardProps {
  video: any
  iframeClassName: string
  setCurrentTime?: any
  startsForm?: number
  iframe?: any
  onStateChange?: any
  goToTimeFunc?: any
}

export const VideoCard = memo(({video, iframeClassName, iframe, startsForm, goToTimeFunc, onStateChange}:VideoCardProps) => {
  const iframeWrapper = useRef<HTMLDivElement>(null);

  return (
      <div ref={iframeWrapper}>
        {video && (
            <YouTube iframeClassName={iframeClassName}
                     videoId={video.videoId}
                     title={video.title}
                     ref={iframe}
                     onStateChange={onStateChange}
                     onReady={goToTimeFunc}
                     opts={{
                       playerVars: {
                         start: video.startsFrom || startsForm,
                         autoplay: 0,
                         rel: 0,
                       },
                     }}
            />
        )}
      </div>
  );
})

