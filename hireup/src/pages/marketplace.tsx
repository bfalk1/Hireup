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
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  

  return (
    <div
      ref={ref}
      className=" overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-dark-bg text-white"
    >
      <motion.div>
        <motion.div className="flex flex-col justify-center items-center space-y-20 mb-20">
            {jobs.map((job, index) => (
            <JobCard id={index} title="title" location="Location" company="Company" isActive={true} />
          ))}

        </motion.div>
      </motion.div>
    </div>
  );
};

export default MarketplacePage;




