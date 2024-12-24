import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#043873] text-white py-12 px-6 lg:py-24 lg:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:justify-between
      grid-cols-2">
        
        {/* Left Section: Text and Button */}
        <div className="flex-1 lg:pr-12 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Get More Done With Whitepace
          </h1>
          <p className="text-base lg:text-lg font-light mb-8">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>
          <button className="bg-[#4F9CF9] text-[#043873] py-3 px-6 rounded-lg font-semibold hover:bg-[#3A86E5] transition">
            Try Whitepace Free →
          </button>
        </div>

        {/* Right Section: Placeholder for Content */}
        <div className="mt-12  flex justify-center">
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[500px] h-[250px] sm:h-[300px] lg:h-[300px] bg-[#C4DEFD]  text-[#C4DEFD] shadow-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sapiente vero? Cum harum modi accusantium libero quisquam inventore quibusdam, voluptate praesentium ut sed, veritatis accusamus ipsam reiciendis illum reprehenderit animi.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
