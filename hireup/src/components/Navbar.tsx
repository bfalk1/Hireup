import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [panelStyle, setPanelStyle] = useState({
    transform: 'translateX(100%)',
    transition: 'transform 400ms ease-in-out'
  });
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    setPanelStyle({
      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 400ms ease-in-out'
    });
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
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
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-lg leading-6 text-gray-900 hover:text-blue-500 transition-colors duration-300">
              {item.name}
            </a>
          ))}
          {!isSignedIn && (
            <div className="hidden lg:flex lg:gap-x-12">
              <Link href='/sign-in' className='rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Log In</Link>

            </div>
          )}
          {isSignedIn && (
            <div className="flex items-center space-x-4">
              <Link href={`/Profile/${user.id}`}>
               Profile
              </Link>
              <UserButton />
            </div>
          )}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50" />
        <Dialog.Panel
          style={panelStyle}
          className="fixed inset-y-0 right-0 z-20 w-full max-w-md overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link href='/sign-in' onClick={closeMobileMenu}>Log In</Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
