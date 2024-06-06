import React from 'react';

const Feature = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
      <p className="text-lg mb-4">
        Ready to make a difference? Start by creating or supporting campaigns that matter to you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          <img src="/assets/food-donation.jpg" alt="Food Donations" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">Food Donations</h3>
          <p className="text-gray-700">
            Help provide meals to those in need by supporting food donation campaigns.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Start Campaign
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          <img src="/assets/healthcare-support.jpg" alt="Healthcare Support" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">Healthcare Support</h3>
          <p className="text-gray-700">
            Contribute to campaigns aimed at improving healthcare access and services.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Start Campaign
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          <img src="/assets/educational-initiatives.webp" alt="Educational Initiatives" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">Educational Initiatives</h3>
          <p className="text-gray-700">
            Support educational campaigns to provide access to quality education for all.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Start Campaign
          </button>
        </div>
        {/* Additional campaign categories */}
        <div className="bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          <img src="/assets/Environment-Protection.jpg" alt="Environment Protection" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">Environment Protection</h3>
          <p className="text-gray-700">
            Join initiatives to protect and preserve our environment for future generations.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Start Campaign
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          <img src="/assets/animal-welfare.jpeg" alt="Animal Welfare" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">Animal Welfare</h3>
          <p className="text-gray-700">
            Support campaigns to ensure the well-being and rights of animals.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Start Campaign
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          <img src="/assets/community_development.jpg" alt="Community Development" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community Development</h3>
          <p className="text-gray-700">
            Contribute to projects that empower and uplift communities.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Start Campaign
          </button>
        </div>
        {/* Add more campaign categories here */}
      </div>
    </div>
  );
};

export default Feature;
