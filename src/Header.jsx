import React from 'react'
import { useState } from 'react'


const Header = () => {

  const [selectedOption, setSelectedOption] = useState('Home');

  const handleOptionClick = (category) => {
    setSelectedOption(category);
  };

  return (
    <>
    <header className='fixed top-0 left-0 right-0 xl:mx-auto  h-[89px] 2xl:w-[1440px] w-full '>
        <div className='flex justify-between items-center w-full h-full xl:pl-20 xl:pr-40 lg:px-10 px-5'>
          <div className='flex justify-between items-center md:w-[122px] w-24'>
            <img className='md:w-7 md:h-7 w-5 h-5'  src="/logo.png" alt="" />
            <h1 className='md:text-3xl text-2xl font-Comfortaa pt-2'>logo</h1>
          </div>
          <ul className='flex items-center justify-center mx-auto md:w-[438px] w-full md:gap-8 gap-5 md:text-sm text-xs  font-Montserrat font-medium md:static fixed left-0 right-0 top-20 cursor-pointer'>
            <li className={`${selectedOption === 'Home' ? 'selected' : ''}`} onClick={() => handleOptionClick('Home')}>Home</li>
            <li className={`${selectedOption === 'About Us' ? 'selected' : ''}`} onClick={() => handleOptionClick('About Us')}>About Us</li>
            <li className={`${selectedOption === 'Services' ? 'selected' : ''}`} onClick={() => handleOptionClick('Services')}>Services</li>
            <li className={`${selectedOption === 'News and Updates' ? 'selected' : ''}`} onClick={() => handleOptionClick('News and Updates')}>News and Updates</li>
          </ul>
          <button className='bg-primary text-white md:w-32 md:h-10 w-24 h-8 rounded-md md:text-base text-sm hover:scale-95'>Login</button>
        </div>
      </header>
    </>
  )
}

export default Header