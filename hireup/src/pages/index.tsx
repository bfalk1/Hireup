

import { HeroParallaxDemo } from "./heroscroll";
import MarketplacePage from "./marketplace";



export default function Home() {
  return (
    <div className="pt-0">
     <HeroParallaxDemo />
      <MarketplacePage/>
      <div className="py-16 bg-dark-bg">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">About Us</h2>
      <p className="mt-4 text-lg text-white">
        Welcome to our intern recruitment platform. We revolutionize the hiring process by combining hackathon-style competitions with traditional job applications, providing an efficient and innovative way to discover top talent.
      </p>
    </div>
    <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
      <div className="flex flex-col items-center">
        <div className="flex-shrink-0">
          <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9l1 1 2-2m0 8l-1-1-2 2" />
            <circle cx={12} cy={12} r={9} />
          </svg>
        </div>
        <div className="mt-3 text-center">
          <h3 className="text-lg font-medium leading-6 text-white">Innovative Approach</h3>
          <p className="mt-2 text-base text-white">
            Our hackathon-style competitions allow candidates to showcase their skills in real-world scenarios, providing hiring managers with valuable insights into their abilities.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex-shrink-0">
          <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2h6a2 2 0 012 2v6z" />
          </svg>
        </div>
        <div className="mt-3 text-center">
          <h3 className="text-lg font-medium leading-6 text-white">Efficient Recruitment</h3>
          <p className="mt-2 text-base text-white">
            By combining traditional job applications with our hackathon-style competitions, we streamline the recruitment process, ensuring that you find the perfect candidate quickly and efficiently.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}


