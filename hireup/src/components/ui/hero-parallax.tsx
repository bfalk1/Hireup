import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
export const HeroParallax = () => {
  
  const product1 = 
    {
      title: "Ranked Candidates",
      thumbnail: "https://cdn.usegalileo.ai/screenshots/0c085a1f-2ca5-4ceb-9093-fcc851fde373.webp",
    }
    const product2 = 
    {
      title: "Candidate Applicaiton Feedback",
      thumbnail: "https://cdn.usegalileo.ai/screenshots/74012bf0-613e-41f1-b6b1-d7b892df219d.webp",
    }


  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [40, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.55, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 100]), springConfig);
  const ytranslate = useSpring(useTransform(scrollYProgress, [0, 0.2], [-1000, 100]), springConfig);
  
  return (
    <div
      ref={ref}
      className="h-[260vh] pt-60 pl-12 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-dark-bg text-white"
    >
      <Header />
     <div className='mt-60'>
      <motion.div  className="flex flex-col justify-center items-center gap-5"style={{
          opacity
        }}>
        <motion.div
        style={{
          rotateX,
          translateY,
          rotateZ,
        }}
      >
        <ProductCard product={product1} />
      </motion.div>
      <motion.div
        style={{
          rotateX,
          translateY: ytranslate,
          rotateZ,
        }}
      >
        <ProductCard product={product2} />
      </motion.div></motion.div>
     </div>
    </div>
  );
};

import { FaStar } from 'react-icons/fa'; // Importing star icon from react-icons

export const Header = () => {
  return (
    <div className="max-w-7xl relative z-10 ">
      <div className="inline-block">
        <h1 className="text-xl md:text-6xl font-bold dark:text-white">
          Your Next Star Intern Awaits <FaStar className="inline-block text-yellow-300 pb-3" /><br /> Secure Top Talent with Hireup
        </h1>
        <p className=" text-base md:text-3xl mt-8 dark:text-neutral-200 ">
          Skip the Resume Pile. Define Your Criteria, <br />Get Ranked Candidates Instantly
        </p>
      </div>
      <div className=" mx-auto pt-10 rounded-lg ">
        <Link href="/main">
          <button className=" text-white py-3 px-20 rounded-3xl  text-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 " style={{ backgroundColor: '#006EFF' }}>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};





export const ProductCard = ({ product }: { product: { title: string;  thumbnail: string }; }) => {
  return (
    <motion.div
      whileHover={{
        y: -20,
      }}
      className="group/product h-[35rem] w-[60rem] relative flex-shrink-0 rounded-2xl"
    >
      <div className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          height="1000"
          width="1000"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-10 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
