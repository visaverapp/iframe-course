import {SearchResultPage} from "@/pages/SearchResultPage/SearchResultPage";

export const SearchLayout = () => {

  return (
      <div className='w-[100vw] h-[100vh] bg-white-hover'>
        <div className='fixed left-[20%] top-[-4%] mt-[10%]'>
          <div className='flex flex-col gap-[14px] w-[1080px] h-[600px] bg-white p-[40px] mx-auto rounded-[15px]'>
            <SearchResultPage/>
          </div>
        </div>
      </div>
  );
};


