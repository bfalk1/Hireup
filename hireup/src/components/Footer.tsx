import React from 'react';

// Define an interface for the icon props
interface IconProps extends React.SVGProps<SVGSVGElement> {}

// Define an interface for a navigation item
interface NavigationItem {
  name: string;
  href: string;
  icon: (props: IconProps) => JSX.Element;
}

// Your navigation array with type-safe props for icons
const navigation: NavigationItem[] = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props: IconProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        {/* SVG path */}
      </svg>
    ),
  },
  // Add other navigation items here...
];

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white w-full">
      <div className="flex flex-col justify-between h-full mx-auto max-w-7xl px-6 py-12 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="md:order-1">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
