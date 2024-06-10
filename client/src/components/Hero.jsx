import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-vector/business-data-analysis-hand-holding-megaphone-computer-screen-smart-marketing-digital-payment-flat-vector-illustration-internet-communication-concept-banner-landing-web-page_74855-24348.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center p-4">
        <p className="text-5xl font-bold text-white mb-8 animate-fadeIn">
          Join us in making a difference. <br /> Every contribution counts.
        </p>
        <div>
          <Link href="/donate">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 animate-bounceIn">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
