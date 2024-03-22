
import { HeroParallaxDemo } from "./heroscroll";
import MarketplacePage from "./marketplace";
import Link from "next/link";



export default function Home() {
  return (
    <div className="pt-0 bg-dark-bg">
      <HeroParallaxDemo />

      <div className="py-16 bg-dark-bg">
        <div className=" bg-blue-100 text-black">
          <div className="text-center mx-40 py-32">
            <h2 className="text-3xl font-extrabold  sm:text-4xl pb-5">What is Hireup</h2>
            <p className="mt-4 text-lg font-normal">
              Hireup is a tech recruiting platform which combines hackathon style competitions with traditional internship applications. Candidates compete in events testing their technical abilities in ranges of technical areas. These will demonstrate the crucial skills employers are looking for in intern's, such as adaptability, problem solving and ability to learn. <br /> <br /> Tied with the technical assessment, is a profile which demonstrates the interpersonal side of each applicant, allowing recruiters to tell how they will fit in the team dynamic. List of applicants are ranked on the preferences defined by the recruiter allowing them to make fast and effective hiring decisions, while ensuring high quality talent.
            </p>
          </div>

        </div>

      </div>

      

      <div className="py-16 bg-dark-bg">
  <div className="text-white">
    <div className="text-center mx-32 py-32">
      <h2 className="text-3xl font-extrabold sm:text-4xl pb-5">Get Feedback on Your Applications While Building Your Portfolio</h2>
      <p className="mt-4 text-lg">
        With Hireup, intern applicants receive valuable feedback on their applications while simultaneously building their portfolio. Through hackathon-style competitions and traditional internship applications, candidates can showcase their technical abilities across various areas, including adaptability, problem-solving, and learning skills. <br /> <br />
        Our platform emphasizes the importance of the interpersonal aspect of each candidate, helping recruiters assess how they will contribute to team dynamics. Additionally, applicants are ranked based on recruiter preferences, facilitating fast and effective hiring decisions while ensuring top talent acquisition.
      </p>
    </div>
  </div>
</div>
<MarketplacePage />

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


