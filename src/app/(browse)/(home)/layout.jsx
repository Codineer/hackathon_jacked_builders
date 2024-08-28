import React from 'react'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ShoppingCart } from 'lucide-react';
import Navbar from '@/components/Navbar';
const HomeLayout = ({ children }) => {
  return (
    <>

      <header>
        <Navbar>
          <div className='flex justify-center items-center gap-6'>
            <ShoppingCart color="red" size={27} />
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

          </div>

        </Navbar>
        {children}


      </header>


    </>
  )
}

export default HomeLayout
