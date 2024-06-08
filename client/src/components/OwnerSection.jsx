// components/OwnersSection.js
import React from 'react';
import Image from 'next/image';

const owners = [
  {
    name: 'Farzeen Ali',
    semester: 'Semester 8',
    imageSrc: '/assets/farzeen.jpg',
  },
  {
    name: 'Safa Maqbool',
    semester: 'Semester 8',
    imageSrc: '/assets/safa.jpg',
  },
  {
    name: 'Faizan Khalid',
    semester: 'Semester 8',
    imageSrc: '/assets/faizan.jpg',
  },
];

const OwnersSection = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Project Created By</h2>
      <div className="flex justify-center space-x-8">
        {owners.map((owner, index) => (
          <div key={index} className="text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src={owner.imageSrc}
                alt={owner.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{owner.name}</h3>
            <p className="text-gray-600">{owner.semester}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnersSection;
