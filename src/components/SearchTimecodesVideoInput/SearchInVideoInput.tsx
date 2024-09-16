import {useEffect, useRef, useState} from 'react';
import ReactGA from "react-ga4";
import {useSearchParams} from "react-router-dom";
import {useDebounce} from "@/hooks/useDebounce";
import SearchIcon from "@/components/SVGIcons/SearchIcon";
import {ClearIcon} from "@/components/SVGIcons/ClearIcon";

type SearchInVideoInputPropsType = {
  getSearch: (value: string) => Promise<void>
  showBackButton?: boolean
  setIsActiveInput: (value: boolean) => void
  isActiveInput: boolean
}

export const SearchInVideoInput = ({getSearch,setIsActiveInput, isActiveInput }: SearchInVideoInputPropsType) => {
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


  const handleFocus = () => {
    setIsFocused(true);
    setIsActiveInput(true)
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsActiveInput(false)
  };

  const onSearch = () => {
    makeSearch();
  };

  const clearInput = () => {
    searchInputRef.current!.value = '';
    setParam('')
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
              className={`${isActiveInput ? 'w-[711px]' : 'w-[457px]'} focus:outline-none focus:border-light-gray self-end pl-[16px] pr-[45px] pt-[7px] pb-[7px] border-white-active border-[1px] rounded-[10px] text-[16px] text-dark-blue`}
          />
          {!isActiveInput ?
              <div className='absolute right-[2%] top-[25%]'>
                <SearchIcon/>
              </div>
              : <div onClick={clearInput} className='cursor-pointer absolute right-[3%] top-[35%]'>
                <ClearIcon/>
              </div>
          }
        </div>
      </div>
  );
};