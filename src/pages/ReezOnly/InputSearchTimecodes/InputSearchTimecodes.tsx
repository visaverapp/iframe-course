import {useEffect, useState} from 'react';
import SearchIcon from "../../../components/SVGIcons/SearchIcon";
import backIconWhite from "../../../components/SVGIcons/BackIconWhite.svg";
import {useNavigate, useLocation} from "react-router-dom";

type InputSearchTimecodesPropsType = {
  onChange: (value: boolean)=> void
}

export const InputSearchTimecodes = ({onChange}: InputSearchTimecodesPropsType) => {
  const [inputValue, setInputValue] = useState('');
  const [, setIsFocused] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.fromSearch) {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  }, [location]);

  const handleBackClick = () => {
    navigate('/search'); // Возврат на предыдущую страницу
  };



  const handleChange = (e: any) => {
    setInputValue(e.target.value.trim());
  };
  const handleFocus = () => {
    setIsFocused(true);
    onChange(true)
  };

  const handleBlur = () => {
    setIsFocused(false);
    onChange(false)
  };

  // const clearInput = () => {
  //   setInputValue('');
  //   setIsFocused(false);
  // };

  return (
      <div className='flex gap-[10px] w-[546px] h-[40px]'>
        {showBackButton && <button onClick={handleBackClick}
            className='hover:bg-opacity-80 bg-[#514DF7] pl-3 w-[45px] h-[40px] rounded-[10px]'>
            <img src={backIconWhite} alt="backIcon"/>
        </button>
        }
        <div className='relative'>
          <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              onBlur={handleBlur}
            onFocus={handleFocus}
            // defaultValue={params.get('search') ?? ''}
            placeholder='Какие слова ищем в этом видео?'
            className={`${showBackButton ? 'w-[490px]': 'w-[546px]'} focus:outline-none focus:border-light-gray self-end pl-[16px] pr-[45px] pt-[7px] pb-[7px] border-white-active border-[1px] rounded-[10px] text-[16px] text-dark-blue`}
        />
        <div className='absolute right-[2%] top-[25%]'>
          <SearchIcon/>
        </div>
        </div>
      </div>
  );
};