import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p>&copy; 2024 HumanKind Fundraising. All rights reserved.</p>
        </div>
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <a href="#" className="mr-4 hover:text-white">Home</a>
          <a href="#" className="mr-4 hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        <div className="text-center lg:text-right">
          <a href="#" className="mr-4 hover:text-white">
            <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-blue-500" />
          </a>
          <a href="#" className="mr-4 hover:text-white">
            <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-400" />
          </a>
          <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-pink-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;