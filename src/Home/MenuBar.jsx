import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Home, Mail, MenuIcon, MessageSquareText, Search, ShoppingBag, icons } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import useFetch from '@/hook/useFetch'
import { NavLink } from 'react-router-dom'

const navLink = [
    {
        icon : <Home className='h-5 w-5'/>,
        text : "Home",
    },
    {
        icon : <ShoppingBag className='h-5 w-5'/>,
        text : "Shopping",
    },
    {
        icon : <Mail className='h-5 w-5' />,
        text : "Connect",
    },
    {
        icon : <MessageSquareText className='h-5 w-5' />,
        text : "Blog's",
    },
]

export const MenuBar = () => {
    const [input , setInput] = useState('')
    const [data , getData] = useFetch('')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            getData(`https://e-comm-qfj9.onrender.com/api/get/products/search?value=${input}`)
        } , 500)

        return () => clearTimeout(timeoutId);
    } , [input])


    return (
        <Sheet>
        <SheetTrigger>
            <Button className = "lg:hidden md:hidden block bg-[#f67171] hover:bg-[#f67171c7]">
                <MenuIcon/>
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle className = "font-medium text-[#2e2e2eaa]">Search Products or Navigate other pages..</SheetTitle>
            <div className=' mt-[2rem]' />
            <SheetDescription className = "flex items-center gap-x-3 ">
                <Button variant = "outline">
                    <Search className=' h-4 w-4' />
                </Button>
                <Input 
                    placeholder = "Search here.." 
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                />
                
            </SheetDescription>
            <div className=' mb-[2rem]' />
            <hr></hr>
            <div className={
                cn(
                    " transition-all duration-500 ease-in-out overflow-hidden text-left ",
                )
            }>
                <SheetDescription>
                {
                input.length !== 0 && 
                    <ul className=' list-none border-b-2'>
                        {data.length !==0 ? (
                            data.map((ele) => (
                                <li key={ele._id} className=' px-3 py-1.5 hover:bg-stone-200 border-b-1 rounded-md'>
                                <NavLink  to={ele._id} className={""}>
                                    {ele.name}
                                </NavLink>
                                </li>
                            ))
                        ) : (
                            <div className=' flex items-center justify-center'>
                                <p>Loading..</p>
                            </div>
                        )
                        }
                    </ul>
                }
                </SheetDescription>
            </div>
            <SheetDescription className = "text-center flex items-start flex-col text-[1rem] ">
                {navLink.map((ele) => (
                    <h1 key={ele.text} className='mb-[.5rem]' >
                        <NavLink to={ele.text} className='flex items-center gap-x-2' activeClassName = {"active"}>
                            {ele.icon}{ele.text}
                        </NavLink>
                    </h1>
                ))}
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
        </Sheet>
    )
}
