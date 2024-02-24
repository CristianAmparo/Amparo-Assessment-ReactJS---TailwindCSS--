import React from 'react'
import { useState } from 'react'

const App = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Home');

  const handleOptionClick = (category) => {
    setSelectedOption(category);
  };

  const toggleMenuBar =()=>{
        setMenuBar(prev=>!prev)
    }
  return (
    <>
    <section>
      <header className='fixed top-0 left-0 right-0 mx-auto  h-[89px] 2xl:w-[1440px] w-full '>
        <div className='flex justify-between items-center w-full h-full pl-20 pr-40'>
          <div className='flex justify-between items-center w-[122px]'>
            <img className='w-7 h-7' src="/logo.png" alt="" />
            <h1 className='text-3xl font-Comfortaa pt-2'>logo</h1>
          </div>
          <ul className='md:flex items-center justify-center mx-auto w-[438px] gap-8 text-sm font-Montserrat font-medium md:static fixed left-0 right-0 bottom-0 cursor-pointer'>
            <li className={`${selectedOption === 'Home' ? 'selected' : ''}`} onClick={() => handleOptionClick('Home')}>Home</li>
            <li className={`${selectedOption === 'About Us' ? 'selected' : ''}`} onClick={() => handleOptionClick('About Us')}>About Us</li>
            <li className={`${selectedOption === 'Services' ? 'selected' : ''}`} onClick={() => handleOptionClick('Services')}>Services</li>
            <li className={`${selectedOption === 'News and Updates' ? 'selected' : ''}`} onClick={() => handleOptionClick('News and Updates')}>News and Updates</li>
          </ul>
          <button onClick={toggleMenuBar}>
              <img className="md:hidden sm:w-6 sm:h-6 w-5 h-5 " src={`/${menuBar? "close" :"hamburger"}.png`}/>
          </button>
          <button className='bg-primary text-white w-32 h-10 rounded-md'>Login</button>
        </div>
      </header>
      <main className='w-full h-screen flex  items-center  justify-center'>
        <section className='flex items-center justify-center font-Poppins gap-7 '>
          <div className='w-[707px] space-y-7 pt-20'> 
            <div className='text-xl font-medium'>Your Partner in Career Success</div>
            <div className='text-5xl font-bold text-secondary leading-normal' >Connecting Talent with <span className='text-primary'>Opportunity</span></div>
            <div className='py-4'>Welcome to Talent Us Inc., where we make the perfect match between exceptional talent and the companies that need them.</div>
            <div className='flex gap-5'>
              <button className='bg-primary text-white w-40 h-[52px] rounded-[30px]'>Get Started</button>
              <button className='border-primary border text-primary w-40 h-[52px] rounded-[30px]'>Contact Us</button>
            </div>
          </div>
          <div> 
            <img className='w-[562px] h-[464px]' src="/mockupimage.png" alt="" />
          </div>
        </section>
      </main>
    </section>
    </>
  )
}

export default App