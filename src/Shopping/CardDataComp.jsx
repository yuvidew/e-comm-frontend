import React, { useEffect } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Minus, Plus, ShoppingBasket } from 'lucide-react'
import useFetch from '@/hook/useFetch'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


const CardDataComp = () => {
    const [ data , getData] = useFetch()

    useEffect(() => {
        getData(`https://e-comm-qfj9.onrender.com/api/get/cards/${localStorage.getItem('cardId')}`)
    } , [localStorage.getItem('cardId')])

    console.log("object" , data);
    return (
    <Popover>
        <PopoverTrigger>
            <ShoppingBasket className=' text-stone-600 hover:text-[#f67171]' />
        </PopoverTrigger>
        <PopoverContent className = "mt-4 mr-3 w-[20rem]">
            {/* {data.length !==0 ? (
                data.cards.map((ele) => (
                    <div
                        key={ele._id}
                        className=' mb-[1rem] border-b-2 border-b-stone-300 pb-2'
                    >
                        <h1>{ele.name}</h1>
                        <div className=' flex items-center gap-x-3 mt-[.6rem]'>
                            <div className=' w-[40%] '>
                                <Button variant = "outline" className = " h-[5rem] w-full">
                                    <img className=' object-contain w-full h-full' src={ele.image} alt="" />
                                </Button>
                            </div>
                            <div className='flex items-center gap-4 w-[50%]'>
                                <Button variant = "secondary" className = " p-0 py-0 h-[2rem]">
                                    <Minus className=' h-4' />
                                </Button>
                                <Input 
                                    value = {ele.qty}
                                    className = "w-[3rem] p-0" 
                                    disabled
                                />
                                <Button variant = "secondary" className = " p-0 py-0 h-[2rem]">
                                    <Plus className=' h-4' />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h1 className=' text-center'>Loading...</h1>
            )} */}
        </PopoverContent>
    </Popover>

    )
}

export default CardDataComp