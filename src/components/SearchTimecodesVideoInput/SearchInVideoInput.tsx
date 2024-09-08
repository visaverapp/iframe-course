import {useState} from 'react';
import clear from './images/clear.svg'
import search from './images/Search.svg'

type SearchInVideoInputPropsType = {
  onChange: (value: boolean)=> void
}

export const SearchInVideoInput = ({onChange}: SearchInVideoInputPropsType) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

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

  const clearInput = () => {
    setInputValue('');
    setIsFocused(false);
  };

  return (
      <div className="input-container relative">
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={`${isFocused ? 'w-[704px]' : 'w-[340px]'} focus:outline-none focus:border-light-gray self-end h-[40px] px-[16px] pt-[7px] pb-[10px] border-white-active border-[1px] rounded-[12px] text-[14px] text-dark-blue`}
        />
        <label className={`${isFocused && 'w-[97%] pointer-events-auto'} absolute left-[16px] top-[7px] pointer-events-none placeholder text-gray-default ${inputValue ? 'hidden' : ''}`}>
          Что ищем в этом <span className="font-bold">видео</span>?
          {isFocused ?
              <img className='cursor-pointer absolute right-[17px] top-[8px]' src={clear as string}
                   alt="clear"/>
              : <img className='absolute right-[-128px] top-[1px]'  src={search as string} alt="search"
                     onClick={clearInput}
              />
          }
        </label>

      </div>
  );
};