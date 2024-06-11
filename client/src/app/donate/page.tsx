"use client";

import { useAtom } from "jotai";
import React, { useState } from "react";
import { donationsAtom } from "../../State/atoms";

const DonatePage = () => {
  const [donations] = useAtom(donationsAtom);

  return (
    <div className="rootContainer">
      <div className="donationContainer">
        {donations.map((item, index) => {
          const { data, type } = item;

          <DonationCard key={index} type={type} data={data} />;
        })}
      </div>
    </div>
  );
};

export default DonatePage;

const DonationCard = ({ type, data }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e, campaignName, amount) => {
    e.preventDefault();
    alert(
      `Thanks for your donation of $${amount} to the "${campaignName}" campaign!`
    );
  };

  return (
    <div className="donationCard">
      <h2 className="donationHeading">{type}</h2>
      <div className="itemCard">
        <div className="itemName">Campaign Name:</div>
        <div className="itemValue">{data.campaignName}</div>
      </div>
      <div className="itemCard">
        <div className="itemName">Description:</div>
        <div className="itemValue">{data.description}</div>
      </div>
      <div className="itemCard">
        <div className="itemName">Start Date:</div>
        <div className="itemValue">{data.startDate}</div>
      </div>
      <div className="itemCard">
        <div className="itemName">End Date:</div>
        <div className="itemValue">{data.endDate}</div>
      </div>
      <div className="itemCard">
        <div className="itemName">Target Amount:</div>
        <div className="itemValue">{data.targetAmount}</div>
      </div>

      <form onSubmit={(e) => handleSubmit(e, data.campaignName, amount)}>
        <div className="itemCard">
          <div className="itemName">Enter your amount to donate:</div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="donationInput"
            required
          />
        </div>
        <button type="submit" className="donationButton">
          Submit
        </button>
      </form>
    </div>
  );
};
