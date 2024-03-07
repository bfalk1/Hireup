"use client"
import { SignIn, useSignIn, useSession, useAuth, useClerk} from "@clerk/nextjs"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"



const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  




  const handleReset = async (e: any) => {
    e.preventDefault();
    
    

    try {
      // Step 1: Sign in with Clerk
      

        
      
    } catch (error) {
      console.error('Sign-in failed:', error);
    } 
  };


  return (

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <script type="module" src=""></script>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset your password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleReset} method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>



          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reset
            </button>

          </div>
        </form>

      </div>
    </div>
  )
}




export default SignInPage

