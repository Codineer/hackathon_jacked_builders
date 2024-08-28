import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
const ItemsBar = ({ children, className }) => {
    return (
        <>
            <ul className={className}>
                <li className="font-semibold flex justify-center items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex justify-center items-center">Series<ChevronDown size={21} /></DropdownMenuTrigger>
                        <DropdownMenuContent >
                            <DropdownMenuItem>
                                <Link href={'/series/gold'}>
                                    Gold Series
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={'/series/premium'}>
                                    Premium Series
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={'/series/ultimate'}>
                                    Ultimate Series
                                </Link>

                            </DropdownMenuItem>


                        </DropdownMenuContent>
                    </DropdownMenu>



                </li>
                <li className="font-semibold flex justify-center items-center">
                    Pc Builder
                </li>
                <li className="font-semibold flex justify-center items-center">
                    Orders
                </li>
                <li className="font-semibold flex justify-center items-center">
                    Buy Components
                </li>
            </ul>
        </>
    )
}
export default ItemsBar