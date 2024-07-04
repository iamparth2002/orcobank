import React from 'react'

const Hero = () => {
  return (
    <div className='px-10 md:px-44 py-16 md:h-[650px] bg-right text-white backdrop-blur-sm' style={{
        backgroundImage: 'url(check.jpg)',
        backgroundSize:'cover',
        backgroundPositionY:"center",
        backgroundRepeat:"no-repeat"
    }}>
        <div className='md:w-1/2 h-full space-y-8 '>
        <div>
        <h1 className='font-semibold'>
            PROFESSIONAL BANKING SERVICES
        </h1>
        <h1 className='font-bold text-5xl md:text-7xl'>
            Take Full Control Of You Finances Account
        </h1>
        </div>
       
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repellendus? Molestias nulla, eum vel optio, deserunt quasi totam possimus asperiores officia, doloremque eos ipsum! Odio.
        </p>

        <div className='flex gap-10'>
            <button className='bg-green-500 p-5 rounded-xl text-white font-semibold'>Get Started</button>
            <button>How it Works?</button>
        </div>
        </div>
        
    </div>
  )
}

export default Hero