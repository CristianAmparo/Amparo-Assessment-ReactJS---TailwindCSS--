import React from 'react'

const Home = () => {
  return (
    <>
    <main className='w-full h-screen flex  items-center  justify-center'>
        <section className='flex md:flex-row flex-col-reverse items-center xl:justify-center font-Poppins lg:gap-7 gap-4'>
            <div className='2xl:w-[707px] xl:w-[600px] sm:w-[450px] 2xl:space-y-7 xl:space-y-4 2xl:pt-14 xl:pt-12 p-5'> 
                <div className='lg:text-xl text-base font-medium'>Your Partner in Career Success</div>
                <div className='lg:text-5xl text-3xl font-bold text-secondary leading-normal' >Connecting Talent with <span className='text-primary'>Opportunity</span></div>
                <div className='lg:text-base text- py-4'>Welcome to Talent Us Inc., where we make the perfect match between exceptional talent and the companies that need them.</div>
                <div className='flex md:gap-5 gap-2 xl:text-base lg:text-sm text-xs'>
                <button className='bg-primary text-white py-3 px-8 rounded-[30px] hover:scale-95'>Get Started</button>
                <button className='border-primary border text-primary py-3 px-8 rounded-[30px] hover:scale-95'>Contact Us</button>
                </div>
            </div>
            <img className='2xl:w-[562px] 2xl:h-[464px] lg:w-[430px] lg:h-[380px] w-[350px] h-[280px] md:block hidden   ' src="/mockupimage.png" alt="" />
        </section>
      </main>
    </>
  )
}

export default Home