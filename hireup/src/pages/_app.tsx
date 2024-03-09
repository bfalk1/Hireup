
import { ClerkProvider } from '@clerk/nextjs';

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { AppType } from 'next/app';

import Footer from '~/Components/Footer';
import Navbar from '~/Components/Navbar';



const MyApp: AppType = ({ Component, pageProps }) => {
 
  return( 
    <ClerkProvider >
      <Navbar/>
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    <Footer/>
  </ClerkProvider>
    ) 
};

export default api.withTRPC(MyApp);
