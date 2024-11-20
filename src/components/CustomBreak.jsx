import React from 'react'

const CustomBreak = () => {
  return (
    <div className='w-full flex justify-center items-center text-secondary py-14'>
        <div className='w-24 h-[1.4px] bg-secondary '></div>
        <div className='relative flex justify-center items-center'>
            <div className='h-[7px] w-[7px] border-[1.5px] border-secondary rounded-full absolute right-2 bg-white '></div>
            <div className='h-[10px] w-[10px] border-[1.5px] border-secondary rounded-full'></div>
            <div className='h-[7px] w-[7px] border-[1.5px] border-secondary rounded-full absolute left-2 bg-white'></div>
        </div>
        <div className='w-24 h-[1.4px] bg-secondary'></div>
    </div>
  )
}

export default CustomBreak