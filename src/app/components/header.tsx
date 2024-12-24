import React from 'react';
import logo from "../../../public/images/Logo.png";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[#043873] py-4 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between drop-shadow-md overflow-hidden">
      {/* Logo Section */}
      <div className="mb-4 md:mb-0 flex justify-center md:justify-start">
        <Image 
          src={logo} 
          alt="logo" 
          width={100} 
          height={34} 
        />
      </div>

      {/* Navigation Menu */}
      <nav className="w-full md:w-auto flex justify-center md:justify-between items-center mb-4 md:mb-0">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-white text-sm font-semibold">
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
      </nav>

      {/* Login Button */}
      <div className="flex justify-center">
        <button className="py-2 px-6 md:py-3 md:px-8 bg-[#FFE492] rounded-lg text-[#043873]">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
