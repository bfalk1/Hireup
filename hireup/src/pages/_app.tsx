
import { ClerkProvider } from '@clerk/nextjs';

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { AppType } from 'next/app';

import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';



const MyApp: AppType = ({ Component, pageProps }) => {
 
  return( 
    <ClerkProvider >
      <Navbar/>
      <div className="h-8 bg-dark-bg"></div>
    <Component {...pageProps} className="py-0"/>
    <Footer/>
  </ClerkProvider>
    ) 
};

export default api.withTRPC(MyApp);
