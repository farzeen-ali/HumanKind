import React from 'react';

const Navbar = () => {
  const menuItems = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-bold hover:text-gray-300 transition duration-300">Logo</a>
        </div>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="text-gray-300 hover:text-white transition duration-300">
              {item.text}
            </a>
          ))}
        </div>
        <div className="md:flex items-center space-x-4">
          <button className="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300">Login</button>
          <button className="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
