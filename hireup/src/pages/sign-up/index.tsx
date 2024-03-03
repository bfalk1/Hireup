"use client"
import { useSignUp, useClerk } from "@clerk/nextjs"
import { useState, useEffect } from "react"
import {useRouter} from "next/navigation"
import { useAuth } from "@clerk/nextjs"

 
import { api } from "~/utils/api"


const SignUpPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailVerified, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const router = useRouter();

  const {signOut} = useClerk()

  const session = useAuth(); // Assuming isAuthenticated indicates whether the user is authenticated

  // Redirect to main page if user is already signed in
  useEffect(() => {
    if (session.isSignedIn) {
      router.push('/main'); // Replace current URL with the main page URL
    }
  }, [session.isSignedIn, router]);

  const { mutate, error } = api.user.createUser.useMutation({
    onSuccess: (data) => {
      // Data here is the result of your createUser mutation
      // Assuming that the result has a property `id` which is the user ID
      const userId = data.id.toString();

      // Do any other actions needed after successful user creation
      console.log('User created successfully', data);
      router.push('/register');
    },
    // Optionally, you can handle errors as well
    onError: (error) => {
      signOut()
      console.error('Error creating user:', error);
    },
  });

  const handleSubmit = async (e:any) => { 
    e.preventDefault();

    if (!isLoaded){
      return;
    }

    if (password != confirmPassword){
      throw new Error("Passwords do not match")
    }
    try{
      await signUp.create({
        firstName: firstName,
        lastName: lastName,
        emailAddress: email,
        password,
      })

      const user = await signUp.prepareEmailAddressVerification({strategy: 'email_code'})
      
      setPendingVerification(true)
      
    }
    catch (error){
      console.log(error)
    }
    
  };

  const onPressVerify = async (e:any) => {
    e.preventDefault();

    if (!isLoaded){
      return;
    }
    
    try{
      const completeSignup = await signUp.attemptEmailAddressVerification({
        code,
      })

      if(completeSignup.status !== 'complete'){

      }
      if(completeSignup.status == 'complete'){
        await setActive({session: completeSignup.createdSessionId})
        const user = mutate({ firstName, lastName, email, emailVerified});
       
        
      }
    }catch (error){
      console.log(error)
    }
   };


  return (
    <>
      {!emailVerified && (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  onSubmit= {handleSubmit} className="space-y-6" >
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
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="onfirmPassword"
                  type="password"
                  autoComplete="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
      )}
      {emailVerified && (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Enter verification code
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Code
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="code"
                  name="code"
                  type="text"
                  autoComplete="code"
                  onChange={(e) => setCode(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={onPressVerify}
              >
                Submit Code
              </button>
            </div>
          </form>

          
        </div>
      </div>
      )}
    </>
  )
}

export default SignUpPage
