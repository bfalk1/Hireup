import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Job {
  id: number;
  title: string;
  location: string;
  company: string;
  isActive: boolean;
}

const JobCard: React.FC<Job> = ({ title, location, company, isActive }) => (
  <motion.div
    className={`p-4 border rounded-lg ${isActive ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} mb-4 shadow-sm`}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="font-bold text-black text-lg">{title}</h3>
    <p className="text-black">{location}</p>
    <footer className="flex justify-between items-center mt-4">
      <span className="text-sm font-medium text-gray-700">{company}</span>
      {isActive && <span className="text-xs font-semibold text-blue-800 bg-blue-200 px-2 py-1 rounded-full">Highly active</span>}
    </footer>
  </motion.div>
);

const MarketplacePage: React.FC = () => {
  const jobs: Job[] = [
    { id: 1, title: 'GPU Software Development Engineer - Graphics Memory', location: 'Folsom, CA', company: 'Intel Corporation', isActive: true },
    { id: 2, title: 'GPU Software Development Engineer - Graphics Memory', location: 'Folsom, CA', company: 'Intel Corporation', isActive: true },
    { id: 3, title: 'GPU Software Development Engineer - Graphics Memory', location: 'Folsom, CA', company: 'Intel Corporation', isActive: true },
  ];

  const { scrollYProgress } = useScroll();

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [-200, 0]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [200, 0]), springConfig);

  return (
    <div className="overflow-hidden antialiased relative flex flex-col self-auto bg-dark-bg text-white pb-10 px-56">

      <motion.div style={{ x: translateX }}>
        <motion.div >
          <div className="flex justify-center items-center h-full">
            <div className="inline-block">
              <h5 className="text-2xl font-semibold dark:text-white p-5 pl-0">
                Ranked Job Applications
              </h5>
            </div>
          </div>

          <div className="flex flex-row space-x-4 mb-10">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>

        </motion.div>
      </motion.div>
      <motion.div style={{ x: translateXReverse }}>
        <motion.div className="flex flex-row space-x-4 mb-20">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MarketplacePage;