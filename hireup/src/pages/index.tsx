

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
<div className="bg-dark-bg text-white  shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Benefits of Our Recruitment Method</h2>
      <div className="flex justify-center items-center gap-8">
        <div className="w-1/3 flex justify-center items-center">
          {/* Left card */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">For Hiring Managers</h3>
            <ul>
              <li>Efficient talent identification through hackathon-style competitions.</li>
              <li>Access to a diverse pool of high-quality intern applicants.</li>
              <li>Streamlined recruitment process with integrated traditional job applications.</li>
              <li>Reduced time-to-hire and cost savings.</li>
              <li>Opportunity to evaluate candidates in real-world scenarios.</li>
            </ul>
          </div>
        </div>
        <svg className="w-20 h-20 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  {/* Helix SVG */}
  <path fillRule="evenodd" d="M8 17.25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h3c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5V12c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h-3c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5V14.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm0-7c-.828 0-1.5-.672-1.5-1.5S7.172 7.25 8 7.25h3c-.828 0-1.5-.672-1.5-1.5S10.172 4.25 11 4.25h-3c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm0-7c-.828 0-1.5-.672-1.5-1.5S7.172.25 8 .25h3c-.828 0-1.5-.672-1.5-1.5S10.172-2.25 11-2.25h-3c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z" clipRule="evenodd" />
</svg>

        <div className="w-1/3 flex justify-center items-center">
          {/* Right card */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">For Intern Applicants</h3>
            <ul>
              <li>Engaging and hands-on experience through hackathons.</li>
              <li>Exposure to real-world challenges and industry best practices.</li>
              <li>Potential to showcase skills and creativity to hiring managers.</li>
              <li>Opportunity to network with professionals in the field.</li>
              <li>Possibility of securing internships based on performance.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button className="continue-application relative border-none outline-none cursor-pointer rounded-5 font-medium text-white text-base transition duration-300 bg-dark-bg py-4 px-8 hover:bg-dark-bg-hover">
  <div className="absolute top-0 left-0 bottom-0 w-20 overflow-hidden rounded-l-5 bg-background-left transition duration-300 hover:bg-background-hover">
    <div className="folder relative w-9 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-400 hover:rotate-12">
      <div className="top absolute w-9 h-10 transition-transform duration-400 hover:rotate-12">
        <svg className="w-9 h-10 block transform origin-left transition-transform duration-400 hover:rotate-12" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0L23 0C23.5523 0 24 0.447715 24 1L24 8.17157C24 8.70201 23.7893 9.21071 23.4142 9.58579L20.5858 12.4142C20.2107 12.7893 20 13.298 20 13.8284L20 26C20 26.5523 19.5523 27 19 27L1 27C0.447715 27 0 26.5523 0 26L0 1C0 0.447715 0.447715 0 1 0Z" fill="#F3E9CB" />
        </svg>
      </div>
      <div className="paper absolute w-3 h-20 bg-white left-3 bottom-3 transition-transform duration-400 hover:-translate-y-2"></div>
    </div>
  </div>
  <span className="pl-20 transition-transform duration-400 hover:-translate-x-2">Continue Application</span>
</button>

    </div>
  );
}


