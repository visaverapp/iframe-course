import ArrowLeft from "@/components/SVGIcons/Arrows/ArrowLeft";

export const ButtonPrevResult = () => {
  return (
      <button
          className='w-[217px] h-[52px] flex gap-[8px] px-[16px] py-[8px] bg-indigo text-white font-bold font-open-sans text-[15px] rounded-[12px] items-center'>
        <ArrowLeft stroke='#FFFFFF'/>
        Результаты поиска
      </button>
  );
};