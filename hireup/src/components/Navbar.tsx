import { useState, useEffect, useRef } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import { Search } from 'react-feather'; // Import the Search icon from Feather Icons

const navigation = [
  { name: 'Product', href: '/product' },
  { name: 'Features', href: '/features' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Company', href: '/company' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [panelStyle, setPanelStyle] = useState({
    transform: 'translateX(100%)',
    transition: 'transform 400ms ease-in-out'
  });
  const { isSignedIn, user } = useUser();
  const [searchOpen, setSearchOpen] = useState(false); // State for search bar visibility
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPanelStyle({
      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 400ms ease-in-out'
    });
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };


  return (
    <header className="fixed top-0 z-10 w-full bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </Link>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:items-center">
          {/* Search icon */}
          <button
            type="button"
            className="text-gray-700"
            onClick={toggleSearch}
          >
            {/* Use the Search icon from Feather Icons */}
            <Search className="h-6 w-6" aria-hidden="true" />
          </button>
          {/* Navigation links */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg leading-6 text-gray-900 hover:text-blue-500 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          {/* Conditional rendering based on authentication */}
          {!isSignedIn && (
            <div className="hidden lg:flex lg:gap-x-12">
              <Link href='/sign-in' className='rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Log In</Link>
            </div>
          )}
          {isSignedIn && (
            <div className="flex items-center space-x-4">
              <Link href={`/Profile/${user.username}`}>
                Profile
              </Link>
              <UserButton />
            </div>
          )}
        </div>
      </nav>
      {/* Search bar */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50" />
        <Dialog.Panel
          style={panelStyle}
          className="fixed inset-y-0 right-0 z-20 w-full max-w-md overflow-y-auto bg-white px-6 py-6"
        >
          {/* Your mobile menu content */}
        </Dialog.Panel>
      </Dialog>
      {/* Search bar */}
      {searchOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={toggleSearch}>
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ref={searchRef} // Updated ref assignment
            onClick={handleSearchClick}
          />
        </div>
      )}
    </header>
  );
}
