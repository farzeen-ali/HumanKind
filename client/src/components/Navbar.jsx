const Navbar = () => {
  const menuItems = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-bold">Logo</a>
        </div>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="text-white">
              {item.text}
            </a>
          ))}
        </div>
        <div className="md:flex items-center">
          <button className="bg-blue-500 hover:bg-blue-700 m-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
          <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;