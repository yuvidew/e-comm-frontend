import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ShoppingBasket } from 'lucide-react'


const CardDataComp = () => {
    return (
    <Popover>
        <PopoverTrigger>
            <ShoppingBasket className=' text-stone-600 hover:text-[#f67171]' />
        </PopoverTrigger>
        <PopoverContent className = "mt-4 mr-3">Place content for the popover here.</PopoverContent>
    </Popover>

    )
}

export default CardDataComp