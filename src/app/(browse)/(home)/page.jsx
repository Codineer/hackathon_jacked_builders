
import React from "react";
import ItemsBar from "./_components/ItemsBar";
import Image from "next/image";


import { Vortex } from "@/components/ui/vortex";

const Page = ({ children }) => {
    return (
        <>

            <div className="relative">

                <ItemsBar className={"z-20 text-white flex gap-6 py-4 px-9 absolute top-0 w-screen"} />
                <Image src={'/images/banner.jpg'} width={1000} height={400} className="w-screen h-[450px]" />
            </div>
            <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={500}
                    baseHue={120}
                    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-screen h-full"
                >
                    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                        Serving Millions Across Globe
                    </h2>
                    <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                        as we are Jack Builders
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">

                    </div>
                </Vortex>
            </div>




        </>
    )
}

export default Page