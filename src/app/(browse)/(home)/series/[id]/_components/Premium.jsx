import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { CardBody, CardContainer, CardItem } from '@/components/3d-card'
import Spec from './Spec'
export default function Premium({ }) {
    return (
        <>
            <div className='flex justify-center  gap-24'>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="100" className="w-full mt-4 relative">
                            <Spec cpu='Intel Core I7-12400' gpu="ASRock RTX 3050 Challenger D 8GB" motherboard="MSI PRO B760M-E DDR4" storage={"EVM 1TB M.2 NVMe"} ></Spec>
                            <Image
                                src="/images/premium1.jpeg"
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
                            PC PHARAOH AL940N
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            A Beast For Professionals
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
                                    $1499
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
                            <Spec cpu='AMD Ryzen 9 7950x3d
' gpu="RTX 3070 TI
" motherboard="Gigabyte B450M DS3H WIFI
" storage={"Western Digital Blue SN580 512TB M.2 NVMe"} ></Spec>
                            <Image
                                src="/images/premium2.jpeg"
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
                            PC PHARAOH AL5620N
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Nex Gen Beast
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
                                    $1999
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