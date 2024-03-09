import React from 'react';

const ProductPage: React.FC = () => {
  // Placeholder information for the hiring system
  const productInfo = {
    name: "HireUp",
    description: "The complete solution for streamlining your hiring process. Efficient. Effective. Exceptional.",
    features: [
      "Automated candidate sourcing",
      "AI-driven applicant matching",
      "Comprehensive reporting tools",
      "Seamless interview scheduling",
      "Integrated offer management"
    ],
  };

  // Using a publicly available image from Unsplash (replace with any other tech-related image URL)
  const productImageUrl = 'https://images.unsplash.com/photo-1581090700227-1e37b190418e';

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-16 px-6">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img 
                src={productImageUrl} 
                alt="Technology" 
                className="object-cover w-full h-96 md:h-auto" 
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-3">{productInfo.name}</h2>
              <p className="text-gray-600 mb-8">{productInfo.description}</p>
              <ul className="mb-8">
                {productInfo.features.map((feature, index) => (
                  <li key={index} className="text-gray-800 mb-2">- {feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
