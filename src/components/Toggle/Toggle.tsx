import { FC, Fragment, InputHTMLAttributes } from 'react';

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  onChange: ()=> void
}

export const Toggle: FC<ToggleProps> = ({ onChange, title = '' }) => {
  return (
    <Fragment>
      <label htmlFor="toogleA" className="flex items-center cursor-pointer">
        <div className="relative">
          <input id="toogleA" type="checkbox" className="sr-only" onChange={onChange} />
          <div className="key w-[40px] h-[16px] bg-lite-gray rounded-full"></div>
          <div className="dot absolute w-[16px] h-[12px] bg-white rounded-full left-[4px] top-[2px] transition"></div>
        </div>
        <div className="ml-3 font-open-sans font-normal text-[12px] text-dark-blue">{title}</div>
      </label>
      <style>
        {`
      input:checked ~ .dot {
        transform: translateX(100%);
        background-color: #FFFFFF;
      }
      input:checked ~ .key {
        background-color: #00B856;
      }`}
      </style>
    </Fragment>
  );
};
