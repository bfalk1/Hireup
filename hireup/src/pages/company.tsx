import React from 'react';

const CompanyStory: React.FC = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'; // Replace with a URL of your choice

  return (
    <div className="bg-dark-bg">
      <div className="container mx-auto py-12 px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-3">Our Story</h2>
        <p className="text-white mb-6">
          In 2006, YETI Coolers was founded with a simple mission: build the cooler
          you'd use every day if it existed.
        </p>
        <div className="relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Previous
          </button>
          <img
            src={backgroundImageUrl}
            alt="Futuristic city skyline"
            className="w-full h-auto object-cover"
          />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyStory;
