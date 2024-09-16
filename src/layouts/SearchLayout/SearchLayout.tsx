import {SearchInput} from "@/components/SearchInput/SearchInput";
import {SearchResultPage} from "@/pages/SearchResultPage/SearchResultPage";
import ArrowLeft from "@/components/SVGIcons/Arrows/ArrowLeft";
import {useNavigate} from "react-router-dom";

export const SearchLayout = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }

  return (
      <div className='w-[1340px] h-[799px]'>
        <div className='pl-[3%] bg-white py-[12px] border-b-[1px] border-white-active flex gap-[81px]'>
          <button onClick={goBack}
                  className='z-[10] w-[217px] h-[52px] flex gap-[8px] px-[16px] py-[8px] bg-indigo text-white font-bold font-open-sans text-[15px] rounded-[12px] items-center'>
            <ArrowLeft stroke='#FFFFFF'/>
            Последнее видео
          </button>
          <SearchInput/>
        </div>
        <div className='bg-white-hover'>
          <SearchResultPage/>
        </div>
      </div>
  );
};


