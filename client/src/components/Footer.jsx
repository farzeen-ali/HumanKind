import React from 'react'

const Footer = () => {
  return (
  
        <footer className="bg-gray-800 text-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 HumanKind Fundraising. All rights reserved.</p>
        </div>
        <div>
          <a href="#" className="mr-4 hover:text-white">Home</a>
          <a href="#" className="mr-4 hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer