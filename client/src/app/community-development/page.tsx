"use client";

import { useAtom } from "jotai";
import React, { useState } from "react";
import { donationsAtom } from "../../State/atoms";

const CommunityPage = () => {
  const [donations, setDonations] = useAtom(donationsAtom);

  const [formData, setFormData] = useState({
    campaignName: "",
    description: "",
    startDate: "",
    endDate: "",
    targetAmount: "",
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
        type: "Community Development",
        data: formData,
      },
    ]);
  };

  return (
    <div
      className="container mx-auto p-4 mt-8 flex justify-center "
      style={{
        backgroundImage:
          "url('https://www.google.com/imgres?q=community%20development&imgurl=https%3A%2F%2Fcdn01.alison-static.net%2Fcourses%2F1782%2Falison_courseware_intro_1782.jpg&imgrefurl=https%3A%2F%2Falison.com%2Fcourse%2Fintroduction-to-community-development-revised&docid=Wjl02EgqRR4i1M&tbnid=nS2nZLWzcuP8GM&vet=12ahUKEwjO0e6tg9KGAxVRQPEDHT_9ARgQM3oECEAQAA..i&w=300&h=200&hcb=2&ved=2ahUKEwjO0e6tg9KGAxVRQPEDHT_9ARgQM3oECEAQAA')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[75%] md:max-w-sm p-6 mt-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 p-4 text-center">
          Start a Community Protection Campaign
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 p-4 border border-gray-300 rounded-lg">
            <label
              htmlFor="campaignName"
              className="block text-gray-700 text-lg font-medium mb-2"
            >
              Campaign Name
            </label>
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
            <label
              htmlFor="description"
              className="block text-gray-700 text-lg font-medium mb-2"
            >
              Description
            </label>
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
              <label
                htmlFor="startDate"
                className="block text-gray-700 text-lg font-medium mb-2"
              >
                Start Date
              </label>
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
              <label
                htmlFor="endDate"
                className="block text-gray-700 text-lg font-medium mb-2"
              >
                End Date
              </label>
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
            <label
              htmlFor="targetAmount"
              className="block text-gray-700 text-lg font-medium mb-2"
            >
              Target Amount
            </label>
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
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Start Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommunityPage;
