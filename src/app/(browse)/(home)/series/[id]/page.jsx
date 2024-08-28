import React from 'react'
import King from './_components/King'
import Premium from './_components/Premium'
import Ultimate from './_components/Ultimate'
import { Vortex } from "@/components/ui/vortex";
export default function Page({ params }) {
    return (
        <>
            <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={500}
                    baseHue={120}
                    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-screen h-full"
                >
                    <div>
                        <h1 className='text-2xl text-white flex justify-center items-center'>
                            <span className='font-bold'>
                                {params.id[0].toUpperCase() + params.id.slice(1)}
                                &nbsp;
                            </span>
                            <span className='font-bold'>Series</span>

                        </h1>
                        {params.id == 'gold' && <King />}
                        {params.id == 'premium' && <Premium />}
                        {params.id == 'ultimate' && <Ultimate />}

                    </div>
                </Vortex>
            </div>



        </>
    )
}

