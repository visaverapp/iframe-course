import {ButtonPrevResult} from "@/components/ButtonPrevResult/ButtonPrevResult";
import {SearchInput} from "@/components/SearchInput/SearchInput";
import {SearchResultPage} from "@/pages/SearchResultPage/SearchResultPage";
export const SearchLayout = () => {
  return (
      <div className='w-[1340px] h-[799px]'>
        <div className='pl-[14px] bg-white py-[12px] border-b-[1px] border-white-active flex gap-[81px]'>
          <ButtonPrevResult />
          <SearchInput/>
        </div>
        <div className='bg-white-hover'>
        <SearchResultPage />
        </div>
      </div>
  );
};


