import {useMemo, useRef} from "react";
import YouTube, {YouTubeEvent, YouTubeProps} from "react-youtube";
import {useSearchParams} from "react-router-dom";
import {Video} from "@/types";

interface VideoCardProps {
  video: Video
  iframeClassName: string
  setCurrentTime?: (time: number | null) =>void
}

export const VideoCard = ({video, iframeClassName}:VideoCardProps) => {
  const iframeWrapper = useRef<HTMLDivElement>(null);
  const iframe = useRef<YouTube>(null);
  const [params] = useSearchParams();


  const startsForm = useMemo(() => {
    const time = params.get('t');
    return time ? parseInt(time) : 0;
  }, [params]);

  const getCurrentTimeFunc = async () => {
  //   setCurrentTime((await iframe.current?.internalPlayer.getCurrentTime()) || 0);
  };

  // let timerId: number;
  const onStateChange: YouTubeProps['onStateChange'] = (event) => {
  //   if (event.data === 1) {
  //     timerId = setInterval(() => {
  //       getCurrentTimeFunc();
  //     }, 1000);
  //   } else if (event.data === 2) {
  //     clearInterval(timerId);
  //   }
  };

  const goToTimeFunc = async (event: YouTubeEvent) => {
    await event.target.seekTo(params.get('t') ?? 0, true);
    await event.target.playVideo();
  };


  return (
      <div ref={iframeWrapper}>
        {video && (
            <YouTube iframeClassName={iframeClassName}
                     videoId={video.videoId}
                     title={video.title}
                     ref={iframe}
                     onStateChange={onStateChange}
                     // onReady={goToTimeFunc}
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
};

