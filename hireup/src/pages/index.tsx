

import { HeroParallaxDemo } from "./heroscroll";
import MarketplacePage from "./marketplace";
import Link from "next/link";



export default function Home() {
  return (
    <div className="pt-0 bg-dark-bg">
     <HeroParallaxDemo />
      
      <div className="py-16 bg-dark-bg">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">About Us</h2>
      <p className="mt-4 text-lg text-white">
        Hireup is a tech recruiting platform which combines hackathon style competitions with traditional internship applications. Candidates compete in events testing their technical abilities in ranges of technical areas. These will demonstrate the crucial skills employers are looking for in intern's, such as adaptability, problem solving and ability to learn. Tied with the technical assessment, is a profile which demonstrates the interpersonal side of each applicant, allowing recruiters to tell how they will fit in the team dynamic. List of applicants are ranked on the preferences defined by the recruiter allowing them to make fast and effective hiring decisions, while ensuring high quality talent. 
      </p>
    </div>
    
  </div>
  
</div>

<MarketplacePage/>

<div className="max-w-lg mx-auto p-6 bg-dark-bg rounded-lg shadow-lg">
      
      <Link href="/main">
        <button className="block w-full  text-white py-3 px-4 rounded-3xl text-center text-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 " style={{ backgroundColor: '#006EFF' }}>
          Get Involved!
        </button>
      </Link>
    </div>
    </div>
  );
}


