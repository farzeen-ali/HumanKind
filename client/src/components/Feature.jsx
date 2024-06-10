import Link from 'next/link';

const campaigns = [
  { name: 'Food Donations', image: '/assets/food-donation.jpg', path: '/food-donations', description: 'Help provide meals to those in need by supporting food donation campaigns.' },
  { name: 'Healthcare Support', image: '/assets/healthcare-support.jpg', path: '/healthcare-support', description: 'Contribute to campaigns aimed at improving healthcare access and services.' },
  { name: 'Educational Initiatives', image: '/assets/educational-initiatives.webp', path: '/educational-initiatives', description: 'Support educational campaigns to provide access to quality education for all.' },
  { name: 'Environment Protection', image: '/assets/Environment-Protection.jpg', path: '/environment-protection', description: 'Join initiatives to protect and preserve our environment for future generations.' },
  { name: 'Animal Welfare', image: '/assets/animal-welfare.jpeg', path: '/animal-welfare', description: 'Support campaigns to ensure the well-being and rights of animals.' },
  { name: 'Community Development', image: '/assets/community_development.jpg', path: '/community-development', description: 'Contribute to projects that empower and uplift communities.' },
];

const Feature = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
      <p className="text-lg mb-4">
        Ready to make a difference? Start by creating or supporting campaigns that matter to you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {campaigns.map((campaign, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            <img src={campaign.image} alt={campaign.name} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{campaign.name}</h3>
            <p className="text-gray-700">{campaign.description}</p>
            <Link href={campaign.path}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Start Campaign
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
