import React from 'react';
import { IoWalletOutline } from "react-icons/io5";
import { PiPiggyBank } from "react-icons/pi";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { MdCurrencyExchange } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";




const section = () => {
  return (
    <div className='px-10 md:px-44 py-16 flex flex-col items-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='font-bold text-4xl'>What can we help you with?</h1>
        <h2 className='text-lg text-gray-700'>Our favourite accounts - created with you in mind</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-14 py-20 '>
        <div className='flex flex-col items-start'>
        <IoWalletOutline size={35} className='pb-2'/>

          <h2 className='font-semibold text-lg'>Checking</h2>
          <p className='text-gray-700 text-md mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A rem
            neque, quidem dicta veritatis molestias.
          </p>
        </div>
        <div className='flex flex-col items-start'>
        <PiPiggyBank  size={35} className='pb-2'/>

          <h2 className='font-semibold text-lg'>Savings</h2>
          <p className='text-gray-700 text-md mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A rem
            neque, quidem dicta veritatis molestias.
          </p>
        </div>
        <div className='flex flex-col items-start'>
        <HiOutlineCreditCard  size={35} className='pb-2'/>

          <h2 className='font-semibold text-lg'>Credit Card</h2>
          <p className='text-gray-700 text-md mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A rem
            neque, quidem dicta veritatis molestias.
          </p>
        </div>
        <div className='flex flex-col items-start'>
        <MdCurrencyExchange size={35} className='pb-2'/>

          <h2 className='font-semibold text-lg'>Loans</h2>
          <p className='text-gray-700 text-md mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A rem
            neque, quidem dicta veritatis molestias.
          </p>
        </div>
        <div className='flex flex-col items-start'>
        <BsHouse  size={35} className='pb-2'/>

          <h2 className='font-semibold text-lg'>Mortgage</h2>
          <p className='text-gray-700 text-md mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A rem
            neque, quidem dicta veritatis molestias.
          </p>
        </div>
        <div className='flex flex-col items-start'>
        <GoShieldCheck  size={35} className='pb-2'/>

          <h2 className='font-semibold text-lg'>Insurance</h2>
          <p className='text-gray-700 text-md mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A rem
            neque, quidem dicta veritatis molestias.
          </p>
        </div>
      </div>
      <button className="bg-green-500 p-5 rounded-xl text-white font-semibold">
        Get Started
      </button>
    </div>
  );
};

export default section;
