import React from 'react';
import { FaChartPie, FaShield } from "react-icons/fa6";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";


const About = () => {
  return (
    <div className="px-10 md:px-44 py-16 bg-gradient-to-b md:bg-gradient-to-r from-green-200 from-20% via-white via-30% to-white to-90%">
      <h1 className="font-bold text-center text-4xl text-[#24322A]"> What do we Offer?</h1>

      <div className="flex flex-col md:flex-row mt-10">
        <div className="flex-1 rounded-xl relative ">
          <img
            src="hero2.jpg"
            alt=""
            className="h-[500px] rounded-2xl object-cover"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 72%, 47% 72%, 47% 100%, 48% 100%, 0 100%)",
            }}
          />
          <div className='absolute  bottom-10 right-0.5 md:right-5 flex gap-5 '>
            <p className='text-lg md:text-2xl font-semibold text-gray-600'>

            Best Financial <br/> Experts Here
            </p>
            <FiArrowUpRight color='green' size={40} />
          </div>
        </div>
        <div className="flex-1 md:ml-24 flex flex-col items-start justify-center gap-16">
          <ul className='flex flex-col gap-14 py-10 md:py-0'>
            <li className='flex gap-5'>
              <div className='bg-green-500 p-4 flex items-center justify-center rounded-3xl'>
                <FaShield color='white'  size={25}/>
              </div>
              <div>
                <h2 className="font-semibold text-xl">Security Gurantee</h2>
                <p className="text-gray-700">
                  Your data and result will be securely protected.
                </p>
              </div>
            </li>
            <li className='flex gap-5'>
              <div className='bg-green-500 p-4 flex items-center justify-center rounded-full md:rounded-3xl'>
              <FaChartPie color='white'  size={25}/>
              </div>
              <div>
                <h2 className="font-semibold text-xl">Investing</h2>
                <p className="text-gray-700">
                You can easily invest your money and get more invested.
                </p>
              </div>
            </li>
            <li className='flex gap-5'>
              <div className='bg-green-500 p-2 md:p-4 flex items-center justify-center md:rounded-3xl rounded-full'>
              <BsFillFileEarmarkBarGraphFill color='white' size={30}/>
              </div>
              <div>
                <h2 className="font-semibold text-xl">Multiple Methods</h2>
                <p className="text-gray-700 text-sm text">
                  You can try here multiple methods and many more features as per you requirements.
                </p>
              </div>
            </li>
            
          </ul>
          <button className="bg-green-500 p-5 rounded-xl text-white font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
