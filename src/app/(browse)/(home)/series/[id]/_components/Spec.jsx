'use client'
import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Cpu, MemoryStick, CircuitBoard, DatabaseBackup } from 'lucide-react'
import { Info } from 'lucide-react'
export default function Spec({ cpu, gpu, motherboard, storage }) {
    return (<>
        <div>
            <HoverCard>
                <HoverCardTrigger><Info className='absolute left-2 top-2 z-10' color='white' strokeWidth={2.5} /></HoverCardTrigger>
                <HoverCardContent>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex gap-2'><Cpu strokeWidth={2.25} /> {cpu}</li>
                        <li className='flex gap-2'><MemoryStick strokeWidth={2.25} /> {motherboard}</li>
                        <li className='flex gap-2'><DatabaseBackup strokeWidth={2.25} /> {storage}</li>
                        <li className='flex gap-2'><CircuitBoard strokeWidth={2.25} />{gpu}</li>
                    </ul>
                </HoverCardContent>
            </HoverCard>

        </div>
    </>)
}