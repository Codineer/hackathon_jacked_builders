import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { CardBody, CardContainer, CardItem } from '@/components/3d-card'
import Spec from './Spec'
export default function Ultimate({ }) {
    return (
        <>
            <div className='flex justify-center  gap-24'>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="100" className="w-full mt-4 relative">
                            <Spec cpu='Intel Core I9-14900K
' gpu="ASUS ROG Strix Gaming RTX 4090 OC Edition 24GB
" motherboard="MSI PRO B760M-E DDR4" storage={"Samsung 990 Pro 2TB M.2 NVMe Gen4(Additional Storage (SSD)"} ></Spec>
                            <Image
                                src="/images/ultimate1.jpeg"
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <CardItem
                            translateZ="50"
                            className="text-xl mt-4 font-bold text-neutral-600 dark:text-white"
                        >
                            PC Ultimate ULD40N
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            An Ultimate beast
                        </CardItem>

                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                <h1 className='text-lg '>
                                    $5999
                                </h1>
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="flex  px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >

                                <ShoppingCart size={20} />
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Spec cpu='AMD Ryzen 9 7950X3D Processor With Radeon Graphics
' gpu="ASUS ROG Strix Gaming RTX 4090 OC Edition 24GB

" motherboard="MSI MEG X670E ACE WIFI

" storage={"Additional Storage (SSD)-Kingston Fury Renegade 4TBx2 M.2 NVMe Gen4"} ></Spec>
                            <Image
                                src="/images/ultimate2.jpeg"
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <CardItem
                            translateZ="50"
                            className="text-xl mt-4 font-bold text-neutral-600 dark:text-white"
                        >
                            PC Ultimate UL5628N
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Mecha Beast
                        </CardItem>

                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                <h1 className='text-lg '>
                                    $6999
                                </h1>
                            </CardItem>

                            <CardItem
                                translateZ={20}
                                as="button"
                                className="flex  px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >

                                <ShoppingCart size={20} />
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        </>
    )
}