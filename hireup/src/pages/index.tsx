import Head from "next/head";
import Link from "next/link";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>Your Project Landing Page</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/aos/dist/aos.css" rel="stylesheet"/>
      </Head>

      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-10 bg-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="block h-8 w-auto" src="https://via.placeholder.com/50x50.png?text=Logo" alt="Your Logo"/>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Navigation Links */}
                <Link href="/home" className="border-transparent text-white hover:border-blue-300 hover:text-blue-700 transition-colors duration-300 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">Home</Link>
                <Link href="/about" className="border-transparent text-white hover:border-blue-300 hover:text-blue-700 transition-colors duration-300 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">About</Link>
                <Link href="/contact" className="border-transparent text-white hover:border-blue-300 hover:text-blue-700 transition-colors duration-300 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">Contact</Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Conditional Rendering for Login/Logout Button */}
              {!user ? (
                <Link href="/api/auth/login" className="border-transparent text-white hover:border-blue-300 hover:text-blue-700 transition-colors duration-300 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">Login</Link>
              ) : (
                <Link href="/api/auth/logout" className="border-transparent text-white hover:border-blue-300 hover:text-blue-700 transition-colors duration-300 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">Logout</Link>
              )}
            </div>
          </div>
        </div>
      </nav>

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
      <footer className="bg-gray-800 text-white text-center p-4">
        {/* Footer Content */}
      </footer>

      {/* AOS Script */}
      <script src="https://cdn.jsdelivr.net/npm/aos@2.2.19/dist/aos.js"></script>
    </>
  );
}
