"use client"
import { SignIn, useSignIn, useSession, useAuth, useClerk} from "@clerk/nextjs"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

import { api } from "~/utils/api"


const SignInPage = () => {
  const router = useRouter();
  const { isLoaded, signIn, setActive } = useSignIn()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // New loading state
  const [signInSuccess, setsignInSuccess] = useState(false); // New loading state
  const session = useAuth()
  const {signOut} = useClerk()

  const { data: user, isSuccess , refetch} = api.user.getUser.useQuery(undefined, {
    onSuccess:(data) => {
      router.push("/main")
    },onError:(error)=>{
      signOut()
      setLoading(false)
      setsignInSuccess(false) 
      console.log(error)},
      enabled: true
  });

  

  // Redirect to main page if user is already signed in
  useEffect(() => {
    if (session.isSignedIn) {
      router.push('/main'); // Replace current URL with the main page URL
    }
  }, [session.isSignedIn, router]);



  const handleSignIn = async (e: any) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when sign-in starts
    

    try {
      // Step 1: Sign in with Clerk
      const result = await signIn!.create({ identifier: email, password })
      if (result.status == "complete"){
        await setActive!({ session: result.createdSessionId })
        .then(() => {
          setsignInSuccess(true)
          console.log('Active session set successfully.');
          // Any additional actions you want to perform
        })
        .catch(error => {
          // Handle errors if setActive fails
          console.error('Error setting active session:', error);
        });
        
        
      }
    } catch (error) {
      console.error('Sign-in failed:', error);
    } 
  };


  return (

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <script type="module" src=""></script>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSignIn} method="POST">
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
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
              </div> : 'Sign in'}
            </button>

          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link href="/sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Click here to Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}




export default SignInPage

