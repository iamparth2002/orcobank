import React from 'react';

const Footer = () => {
  return (
    <footer class="bg-[#24322A] py-1">
      <div class="mx-auto w-full max-w-screen-xl lg:ml-20">
        <div className='text-center py-16 px-2'>
          <h2 className="font-semibold text-5xl text-white">
            Take care of Your Finance Account
          </h2>
          <p className="text-gray-400 mt-4 flex flex-col items-center gap-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
            culpa.
            <button className='bg-green-500 p-5 rounded-xl text-white font-semibold'>Get Support</button>

          </p>
        </div>
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class=" hover:underline">
                  About
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Careers
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Brand Center
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Discord Server
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Twitter
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Facebook
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Licensing
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  iOS
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Android
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Windows
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
