import React from 'react';
import logo from "../../../public/images/Logo.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-[#043873] w-full px-6 py-8 lg:px-16 lg:py-12">
      
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start">
        
        {/* Left Section - Logo and Text */}
        <div className="flex flex-col items-start">
          <Image 
            src={logo}
            alt="logo"
            width={100}
            height={34}
          />
          <p className="text-white text-sm font-thin mt-4 max-w-xs">
            Whitepace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        {/* Product Section */}
        <div className="flex flex-col">
          <h1 className="text-white text-lg font-semibold">Product</h1>
          <ul className="text-white text-sm font-thin mt-3 space-y-2">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Customer stories</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col">
          <h1 className="text-white text-lg font-semibold">Resources</h1>
          <ul className="text-white text-sm font-thin mt-3 space-y-2">
            <li>Blogs</li>
            <li>Guides & Tutorials</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="flex flex-col">
          <h1 className="text-white text-lg font-semibold">Company</h1>
          <ul className="text-white text-sm font-thin mt-3 space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Media Kit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
