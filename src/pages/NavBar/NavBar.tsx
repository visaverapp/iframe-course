import close from "./images/close.svg"
import menu from "./images/burger.svg"
import watch from "./images/watch.svg"

export const NavBar = () => {
  return (
      <nav className="bg-white h-[96%] px-[14px] py-[12px] flex flex-col border-r-[1px] border-white-active">
        <div className='h-full flex flex-col gap-[20px]'>
          <div className="w-[52px] h-[52px] p-[14px] border-[1px] cursor-pointer rounded-[12px] border-white-active">
            <img className='absolute translate-x-[5px] translate-y-[5px]' src={close as string} alt="close"/>
          </div>
          <div className="w-[52px] h-[52px] p-[14px] border-[1px] cursor-pointer rounded-full border-white-active">
            <span className='text-dark-blue text-[15px] font-bold font-open-sans'>0%</span>
          </div>
          <div className="w-[52px] h-[52px] p-[14px] cursor-pointer">
            <img className='absolute translate-x-[5px] translate-y-[5px]' src={menu as string} alt="menu"/>
          </div>
        </div>
        <div className="w-[52px] h-[52px] p-[14px] cursor-pointer">
          <img src={watch as string} alt="watch"/>
        </div>
      </nav>
  );
};

