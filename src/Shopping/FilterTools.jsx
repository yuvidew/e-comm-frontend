import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductFilterTools from './ProductFilterTools'

const FilterTools = () => {
    return (

        <Sheet>
            <SheetTrigger>
                <Button size = "sm" variant = "secondary" className = " rounded-sm text-gray-500 hover:text-stone-900 flex items-center gap-x-2">
                    <SlidersHorizontal className=' h-4 w-4' />
                    <h3>Filter</h3>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <ProductFilterTools/>
            </SheetContent>
        </Sheet>
    )
}

export default FilterTools