import {memo, useState} from "react";
import {useGetTimecodesQuery} from "@/api";
import {secondsToTime} from "@/pages/Search/utils";

interface TimecodesProps {
  setTime: (time: number) => void;
  playlistId: string;
  id: string;
  currentTime: number | null;
  onChange: (value: boolean)=> void
}

export const Timecodes = memo(({ setTime, playlistId, id, onChange }: TimecodesProps) => {
  const [showTextIndex, setShowTextIndex] = useState(null)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const { data } = useGetTimecodesQuery({ playlistId: playlistId, videoPublicId: id });
  // const timings = data?.map((array) => array.start) || [];

  const toggleText = (index: any) => {
    setShowTextIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const onReadMoreClick = () => {
    setIsCollapsed(!isCollapsed);
    onChange(isCollapsed)
  };



  return (
      <div
          className={`${isCollapsed ? 'h-[751px]': 'h-[299px]' } relative scroll-bar overflow-y-scroll w-[712px] rounded-[12px] border-white-active border-[1px] py-[8px] px-[16px]`}>
        {data && (
            <ol>
              {data.map(({start, text, title}, i) => (
                  <li
                      className='cursor-pointer rounded-[12px] pb-[8px] last:pb-[22px] pr-[8px]' key={i}>
                    <div onClick={() => setTime(start)}>
                      <span className='text-lite-green font-open-sans font-bold text-[14px] pr-[5px]'>{secondsToTime(start)}</span>
                      <span className='text-dark-blue font-open-sans font-bold text-[14px]'>{title}</span>
                    </div>
                    <div className='flex w-[670px] justify-between'>
                      <span
                          className='text-indigo font-open-sans font-normal text-[14px]'>
                        {showTextIndex === i ? text : text.slice(0, 85) + '...'}
                      </span>
                      <span onClick={() => toggleText(i)}
                          className='self-end cursor-pointer text-green-hover font-open-sans font-normal text-[14px]'>
                        {showTextIndex === i ? 'Свернуть' : '...ещё'}
                      </span>
                    </div>
                  </li>
              ))}
            </ol>
        )}
        <div className='sticky bottom-[-1%]'>
          <span className='cursor-pointer text-green-hover font-open-sans font-normal text-[14px]' onClick={onReadMoreClick}>
            {!isCollapsed ? 'Развернуть' : 'Свернуть'}
          </span>
        </div>
      </div>
  );
});

Timecodes.displayName = 'Timecodes';
