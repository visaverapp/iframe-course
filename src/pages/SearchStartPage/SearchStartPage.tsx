import {SearchInput} from "@/components/SearchInput/SearchInput";
import searchStartIcon from '../../components/SVGIcons/SearchStartIcon.svg'
import {useSearchParams} from "react-router-dom";

const SearchStartPage = () => {
  const [params] = useSearchParams();
  const currentSearchParams = params.get('search')

  const startSearchPageSettings = {
    inputWidth: 'w-[706px]',
    suggetionsPosition: 'top-[19%] w-[706px]',
    navigatePath: `/search/?search=${currentSearchParams}`
  }

  return (
      <div className='mt-[10%] mx-auto w-[1000px]'>
        <div className='mb-[25%]'>
          <SearchInput startSearchPageSettings={startSearchPageSettings} />
        </div>
        <div className='flex justify-end'>
          <img src={searchStartIcon} alt="searchStartIcon"/>
        </div>
      </div>
  );
};

export default SearchStartPage;