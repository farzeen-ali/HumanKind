import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="grid grid-cols-3  gap-2  m-2 p-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={"/Logo.png"} alt={""} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Food Donation
          </div>
          <p className="text-gray-700 text-base text-center">
            Support our community by donating non-perishable food items to those
            in need. Your contribution will help alleviate hunger and provide
            essential nutrition to families facing food insecurity.
          </p>

          <div className="flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
               Donate Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={"/Logo.png"} alt={""} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Food Donation
          </div>
          <p className="text-gray-700 text-base text-center">
            Support our community by donating non-perishable food items to those
            in need. Your contribution will help alleviate hunger and provide
            essential nutrition to families facing food insecurity.
          </p>

          <div className="flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
               Donate Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={"/Logo.png"} alt={""} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Food Donation
          </div>
          <p className="text-gray-700 text-base text-center">
            Support our community by donating non-perishable food items to those
            in need. Your contribution will help alleviate hunger and provide
            essential nutrition to families facing food insecurity.
          </p>

          <div className="flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;