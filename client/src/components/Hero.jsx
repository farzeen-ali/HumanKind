import React from 'react';


const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <p className='text-5xl font-bold text-center mb-8'>
        Join us in making a difference. <br /> Every contribution counts
      </p>
      <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
  Donate Now
</button>
      </div>
    </div>
  );
};

export default Hero;
