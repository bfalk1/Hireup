import Head from "next/head";
import Link from "next/link";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { UserButton } from "@clerk/nextjs";



export default function Home() {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  return (
    <>
      <Head>
        <title>Your Project Landing Page</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/aos/dist/aos.css" rel="stylesheet"/>
      </Head>

      

      {/* Rest of the page content */}
      <header className="h-screen">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/featured/?technology')" }}>
          {/* Slider Content */}
        </div>
      </header>
      <main>
        {/* About Us Section */}
        <section id="about" className="py-20 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2 text-blue-600 font-mono">About Us</h2>
          <p className="mx-auto leading-relaxed max-w-xl font-mono">
            Welcome to [Your Project Name], where innovation meets practicality...
          </p>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-20 text-center bg-gray-100" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2 text-blue-600 font-mono">Our Sponsors</h2>
          <p className="mx-auto leading-relaxed max-w-xl font-mono">
            We are proud to be partnered with leading names in the tech industry...
          </p>
        </section>
        {/* Past Competitions Section */}
        <section id="past-competitions" className="py-20 text-center bg-gray-100" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2 text-blue-600 font-mono">Past Competitions</h2>
          <p className="mx-auto leading-relaxed max-w-xl font-mono">
            Here, we highlight some of our past competitions and the impact they've had. Explore the innovative ideas and groundbreaking projects that have come to life through these contests.
          </p>
          {/* Additional content for Past Competitions */}
        </section>
      </main>
      

      {/* AOS Script */}
      <script src="https://cdn.jsdelivr.net/npm/aos@2.2.19/dist/aos.js"></script>
    </>
  );
}
