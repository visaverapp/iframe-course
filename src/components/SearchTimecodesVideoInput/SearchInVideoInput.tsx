import {useEffect, useRef, useState} from 'react';
import ReactGA from "react-ga4";
import {useSearchParams} from "react-router-dom";
import {useDebounce} from "@/hooks/useDebounce";
import SearchIcon from "@/components/SVGIcons/SearchIcon";

type SearchInVideoInputPropsType = {
  getSearch: (value: string) => Promise<void>
  showBackButton?: boolean
}

export const SearchInVideoInput = ({getSearch, showBackButton}: SearchInVideoInputPropsType) => {
  const [, setIsFocused] = useState(false);
  // const [showBackButton, setShowBackButton] = useState(false);
  const [param, setParam] = useSearchParams();
  // const location = useLocation();
  // const navigate = useNavigate();

  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const search = param.get('search') || '';

  useEffect(() => {
    const data = searchInputRef.current?.value || '';
    if (data) {
      getSearch(data);
    }
  }, []);

  // useEffect(() => {
  //   if (location.state?.fromSearch) {
  //     setShowBackButton(true);
  //   } else {
  //     setShowBackButton(false);
  //   }
  // }, [location]);

  const makeSearch = useDebounce(() => {
    const data = searchInputRef.current?.value || '';
    if (data) {
      setParam((prev) => {
        prev.set('search', data);
        return prev;
      });
      getSearch(data);
      ReactGA.event({
        category: 'Search',
        action: 'Search in playlist',
      });
    } else {
      setParam((prev) => {
        prev.delete('search');
        return prev;
      });
    }
  }, 500);

  // const handleBackClick = () => {
  //   navigate('/search'); // Возврат на предыдущую страницу
  // };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onSearch = () => {
    makeSearch();
  };

  return (
      <div className='flex gap-[10px] h-[40px]'>
        <div className='relative'>
          <input
              type="text"
              defaultValue={search}
              ref={searchInputRef}
              onChange={onSearch}
              onBlur={handleBlur}
              onFocus={handleFocus}
              placeholder='Что ищем в этом видео?'
              className={`${!showBackButton ? 'w-[490px]' : 'w-[340px]'} focus:outline-none focus:border-light-gray self-end pl-[16px] pr-[45px] pt-[7px] pb-[7px] border-white-active border-[1px] rounded-[10px] text-[16px] text-dark-blue`}
          />
          <div className='absolute right-[2%] top-[25%]'>
            <SearchIcon/>
          </div>
        </div>
      </div>
  );
};