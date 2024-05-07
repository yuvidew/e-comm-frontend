import React, { useEffect } from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'


const ProductCard = ({items}) => {

    return (
        <Card className = " ">
            <div className='overflow-hidden '>
                <img src={items.image}/>
            </div>
            <CardContent>
                <p className=' text-[#f67171]'>{items.category}</p>
            </CardContent>
            <CardHeader className = "mt-[-1rem]">
                <h1 className='text-sm'>{items.name}</h1>
                <div className=''>
                    <span className=' text-sm font-bold'>
                        ${items.newPrice}.00/
                    </span>
                    <span className='text-xs ml-2 text-stone-500'>${items.oldPrice}.00/-</span>
                </div>
            </CardHeader>
            <CardFooter>
                <Link to={`/shopping/${items._id}`} className=' w-full'>
                    <Button variant = "pink" className = "w-full text-stone-100">
                        Order now <ShoppingBag className='h-4 m-4 ml-1'/>
                    </Button>
                </Link>
            </CardFooter>
        </Card>

    )
}

export default ProductCard