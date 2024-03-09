
import { ClerkProvider } from '@clerk/nextjs'

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { AppType } from 'next/app';

import Navbar from '~/Components/Navbar';
import Footer from '~/Components/Footer';



const MyApp: AppType = ({ Component, pageProps }) => {
 
  return( 
    <ClerkProvider >
      <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </ClerkProvider>
    ) 
};

export default api.withTRPC(MyApp);
