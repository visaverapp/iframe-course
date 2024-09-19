type TabsPropsType = {
  activeTab: number
  onChange: (index: number) => void
  tabsLabel: string[]
}

export const Tabs = ({activeTab, onChange, tabsLabel}: TabsPropsType) => {

  return (
      <div className='flex flex-col mb-[12px] w-[99%]'>
        <div className='flex border-white-active border-[1px] rounded-[12px] bg-white self-end'>
          {tabsLabel.map((tab, index) => (
              <span
                  key={index}
                  className={`${
                      activeTab === index
                          ? 'bg-green-active font-bold text-white'
                          : 'bg-white font-normal text-dark-blue'
                  } cursor-pointer block pt-[10px] font-open-sans rounded-[12px] text-center w-[170px] h-[40px] text-[14px]`}
                  onClick={() => onChange(index)}
              >
            {tab}
          </span>
          ))}
        </div>
      </div>
  )
}