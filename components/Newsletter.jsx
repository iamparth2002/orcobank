import React from 'react';

const Newsletter = () => {
  return (
    <div className="p-10 md:px-44 py-20 flex flex-col items-center justify-center bg-gray-200 gap-10">
      <div className='flex flex-col gap-4 items-center justify-center'>
        <h1 className='font-bold text-4xl'>Newsletter</h1>
        <p className='text-lg text-gray-700 text-center  md:w-2/3'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          libero commodi ea? Expedita corrupti at natus minima provident sint
          impedit?
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <input type="email" name="" id="" className='md:w-[500px] p-2' placeholder='Enter your Email' />
        <button className="bg-green-500 p-2  text-white font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
