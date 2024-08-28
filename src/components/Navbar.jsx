import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
Link
export default function Navbar({ children }) {
    return (<>
        <div className='w-screen py-3 px-6 flex justify-between bg-[#000000f6]'>
            <Link href={'/'}>
                <Image
                    src="/images/logo.png"
                    width={100}
                    height={50}
                    alt="Picture of the author"
                />

            </Link>



            {children}

        </div>
    </>)
}