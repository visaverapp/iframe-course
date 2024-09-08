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
        {video.source === 'YOUTUBE' && (
            <YouTube iframeClassName={iframeClassName}
                     videoId={video.videoId}
                     title={video.title}
                     ref={iframe}
            />
        )}

        {/*{video.source === 'VK' && (*/}
        {/*    <iframe*/}
        {/*        ref={vkRef}*/}
        {/*        title={video.title}*/}
        {/*        src={`${video.originLink}&hd=2&autoplay=14&t=${video.startsFrom || startsForm}s&js_api=1`}*/}
        {/*        width="100%"*/}
        {/*        height="500px"*/}
        {/*        allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"*/}
        {/*    ></iframe>*/}
        {/*)}*/}
      </div>
  );
};

