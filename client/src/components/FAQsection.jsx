"use client"
import React, { useState } from 'react';

// Define the FAQ section component
const FAQSection = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the expanded state of an FAQ item
  const toggleFAQ = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        {/* Map through the array of FAQs */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center cursor-pointer p-4">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-gray-600">{expandedIndex === index ? '-' : '+'}</span>
            </div>
            {/* Render the answer if the index matches the expanded index */}
            {expandedIndex === index && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Define the FAQs array
const faqs = [
    {
      question: "How do I create a campaign?",
      answer: "To create a campaign, navigate to the 'Create Campaign' section on our platform and follow the guided steps to set up your campaign details, including title, description, target amount, and duration."
    },
    {
      question: "Can I edit my campaign details after creation?",
      answer: "Yes, you can edit your campaign details at any time by accessing the 'Manage Campaigns' section on our platform. From there, you can update information such as the campaign title, description, target amount, and end date."
    },
    {
      question: "How can I support a campaign?",
      answer: "To support a campaign, visit the campaign page on our platform and click on the 'Support Now' button. You will be prompted to choose a donation amount and payment method. Once completed, your contribution will be added to the campaign."
    },
    // Add more FAQ objects as needed
  ];
  
// Use the FAQSection component with the faqs array
const FAQPage = () => {
  return (
    <div>
      <FAQSection faqs={faqs} />
    </div>
  );
};

export default FAQPage;
