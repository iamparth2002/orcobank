import React from 'react';

const Navbar = () => {
  return (
    <div className="flex bg-[#24322A] text-white items-center justify-between py-5 px-10 md:px-44 items-center">
      <div>
        <h1 className='font-semibold text-lg'>OrcoBank</h1>
      </div>
      <ul className="hidden md:flex gap-8 font-light">
        <li>Home</li>
        <li>Products</li>
        <li>Services</li>
        
        <li>FAQs</li>
        <li>Contact</li>
      </ul>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-3xl">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#24322A] group-hover:bg-opacity-0 rounded-3xl">
          Get Started
        </span>
      </button>
    </div>
  );
};

export default Navbar;
