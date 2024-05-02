import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import useFetch from '@/hook/useFetch'
import { NavLink, useSearchParams } from 'react-router-dom'



const SearchComp = () => {
    const [data , getData] = useFetch()
    const [searchParams , setSearchParams] = useSearchParams({
        q : '',
        onlyProductItems : true
    })

    const query = searchParams.get('q')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            getData(`/api/get/products/search?value=${query}`)
        } , 500)

        return () => clearTimeout(timeoutId);
    } , [query])

    return (
    <Dialog>
        <DialogTrigger>
            <Search className=' h-6 w-6 text-stone-600 hover:text-[#f67171]' />
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle className = "font-medium">Search products hear.</DialogTitle>
                <div className=' mt-4'></div>
                    <hr className=' block mt-3' />
                <div className=' mt-4'></div>
            <DialogDescription>
                <div className='flex items-center gap-x-2'>
                    <Button variant = "outline">
                        <Search className='h-4 w-4' />
                    </Button>
                    <Input 
                        placeholder = "Search.." 
                        value = {query}
                        onChange = {(e) => {
                            e.preventdefault
                            setSearchParams(prev => {
                                prev.set('q' , e.target.value)
                                return prev
                            } , {replace : true})
                        }}
                    />
                </div>
                {query.length !== 0 && <ul className='px-1 mt-4'>
                    {data.length !=0 && (
                        data.map((ele) => (
                            <NavLink to={'/'}>
                                <li key={ele._id} className=' p-2 border-b hover:bg-slate-100'>
                                    {ele.name}
                                </li>
                            </NavLink>
                        ))
                    )}
                </ul>}
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
    )
}

export default SearchComp