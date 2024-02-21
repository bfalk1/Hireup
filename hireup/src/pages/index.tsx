import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user){
    return (
      user && (
          <div>
            <p>{user.email}</p>
          </div>
      )
  );
  }
  
  return <a href="/api/auth/login">Login</a>
  }
  
