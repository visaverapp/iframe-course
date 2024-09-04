import done from './images/Done.svg'
import next from './images/next.svg'
import prev from './images/prev.svg'

const Footer = () => {
  return (
      <div className="bg-white h-[90px] w-full flex items-center justify-between pl-[32px] pr-[12px] border-t-[1px] border-white-active">
        <div className='flex gap-[12px]'>
          <div className='cursor-pointer flex gap-[10px] px-[8px] py-[4px] bg-green-hover rounded-[4px] w-[118px] h-[28px]'>
            <img src={done as string} alt="done"/>
            <span className='font-open-sans text-[15px] font-bold text-white'>Изучено</span>
          </div>
          <span className='font-open-sans text-[18px] font-normal text-dark-blue'>Система знаний для предпринимателей</span>
        </div>

        <div className='flex gap-[20px]'>
          <button className='w-[52px] h-[52px] p-[14px] border-[1px] cursor-pointer rounded-[12px] border-white-active'>
            <img className='pl-[5px]' src={prev as string} alt="prev"/>
          </button>
          <button className='cursor-pointer flex justify-around p-[16px] bg-milk-white rounded-[12px] w-[243px] h-[52px]'>
            <span className='font-open-sans text-[15px] font-bold text-light-gray'>Следующий материал</span>
            <img className='self-center' src={next as string} alt="next"/>
          </button>
        </div>
      </div>
  );
};

export default Footer;