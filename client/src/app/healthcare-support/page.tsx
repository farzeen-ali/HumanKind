"use client";

import { useAtom } from "jotai";
import React, { useState } from "react";
import { donationsAtom } from "../../State/atoms";

const HealthCarePage = () => {
  const [donations, setDonations] = useAtom(donationsAtom);

  const [formData, setFormData] = useState({
    campaignName: '',
    description: '',
    startDate: '',
    endDate: '',
    targetAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDonations((don) => [
      ...don,
      {
        type: "Healthcare Support",
        data: formData,
      },
    ]);
  };

  return (
    <div className="container mx-auto p-4 mt-8 flex justify-center "  style={{ backgroundImage: "url('data:image/jpeg;base64,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')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="w-[75%] md:max-w-sm p-6 mt-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 p-4 text-center">Start a Health Care Support Campaign</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 p-4 border border-gray-300 rounded-lg">
            <label htmlFor="campaignName" className="block text-gray-700 text-lg font-medium mb-2">Campaign Name</label>
            <input
              type="text"
              id="campaignName"
              name="campaignName"
              placeholder="Enter campaign name"
              value={formData.campaignName}
              onChange={handleChange}
              className="w-full px-4 py-2 focus:outline-none border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4 p-4 border border-gray-300 rounded-lg">
            <label htmlFor="description" className="block text-gray-700 text-lg font-medium mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter campaign description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 focus:outline-none border border-gray-300 rounded-lg"
              rows={4}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4">
            <div>
              <label htmlFor="startDate" className="block text-gray-700 text-lg font-medium mb-2">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                placeholder="Select start date"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-2 focus:outline-none border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-gray-700 text-lg font-medium mb-2">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                placeholder="Select end date"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full px-4 py-2 focus:outline-none border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
          <div className="mb-4 p-4 border border-gray-300 rounded-lg">
            <label htmlFor="targetAmount" className="block text-gray-700 text-lg font-medium mb-2">Target Amount</label>
            <input
              type="number"
              id="targetAmount"
              name="targetAmount"
              placeholder="Enter target amount"
              value={formData.targetAmount}
              onChange={handleChange}
              className="w-full px-4 py-2 focus:outline-none border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4 p-4 flex justify-center">
            <button type="submit" className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Start Campaign</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthCarePage;
