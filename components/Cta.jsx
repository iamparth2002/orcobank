import React from 'react';

const Cta = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1">
        <img src="/cta3.jpg" alt="" className='w-full h-full object-cover'/>
      </div>
      <div className=" flex-1 flex flex-col justify-center items-start p-10 md:p-24 gap-16">
        <div className="">
          <h1 className="text-6xl font-bold">
            Open a Orco Bank Checking Account.
          </h1>
          <p className="text-gray-700 text-md mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            doloremque culpa in praesentium, reiciendis harum!
          </p>
        </div>
        <div className="flex gap-10">
          <button className="border border-green-500 py-2 px-5 rounded-md text-black font-semibold">
           Open Now
          </button>
          <button className="text-green-600 rounded-xl">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
