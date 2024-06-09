import React from 'react';
import { HomeIcon, InformationCircleIcon, MailIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import logoImage from '../../public/assets/humankind_cropped-removebg-preview.png';
import { ConnectButton } from 'thirdweb/react';
import ConnectWallet from './ConnectWallet';


const Navbar = () => {
  const menuItems = [
    { icon: <HomeIcon className="h-6 w-6" />, href: '#', text: 'Home' },
    { icon: <InformationCircleIcon className="h-6 w-6" />, href: '#', text: 'About' },
    { icon: <MailIcon className="h-6 w-6" />, href: '#', text: 'Contact Us' },
  ];

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center">
         
            <Image src={logoImage} alt="logo" width={70} height={100}/>
          
        </a>
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-300 hover:text-white transition duration-300 flex items-center space-x-2"
            >
              {item.icon}
              <span className="ml-2">{item.text}</span>
            </a>
          ))}
        </div>
        <div className="md:flex items-center space-x-4">
          <ConnectWallet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
