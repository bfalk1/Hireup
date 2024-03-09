import React from 'react';

interface Job {
  id: number;
  title: string;
  location: string;
  company: string;
  isActive: boolean;
}

const JobCard: React.FC<Job> = ({ title, location, company, isActive }) => (
  <div className={`p-4 border rounded-lg ${isActive ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} mb-4 shadow-sm`}>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-gray-800">{location}</p>
    <footer className="flex justify-between items-center mt-4">
      <span className="text-sm font-medium text-gray-700">{company}</span>
      {isActive && <span className="text-xs font-semibold text-blue-800 bg-blue-200 px-2 py-1 rounded-full">Highly active</span>}
    </footer>
  </div>
);

const MarketplacePage: React.FC = () => {
  const jobs: Job[] = [
    { id: 1, title: 'GPU Software Development Engineer - Graphics Memory', location: 'Folsom, CA', company: 'Intel Corporation', isActive: true },
    { id: 2, title: 'GPU Software Development Engineer - Graphics Memory', location: 'Folsom, CA', company: 'Intel Corporation', isActive: true },
    { id: 2, title: 'GPU Software Development Engineer - Graphics Memory', location: 'Folsom, CA', company: 'Intel Corporation', isActive: true },
  ];

  return (
    <div className="container mx-auto my-6">
      <header>
        {/* Your page header goes here */}
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MarketplacePage;
