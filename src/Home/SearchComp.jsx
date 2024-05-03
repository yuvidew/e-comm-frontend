import { Input } from '@/components/ui/input'
import useFetch from '@/hook/useFetch'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const SearchComp = () => {
    const [input , setInput] = useState('')
    const [data , getData] = useFetch()
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            getData(`https://e-comm-qfj9.onrender.com/api/get/products/search?value=${input}`)
        } , 500)

        return () => clearTimeout(timeoutId);
    } , [input])

    console.log(data);

    return (
        <section className=' relative'>
            <div className=' w-[20rem] border rounded-lg'>
                <div className=' flex items-center  bg-white rounded-lg'>
                    <Search className='h-4 w-4 ml-2 text-[#f67171]'/>
                    <Input 
                        placeholder = "Search here..." 
                        className = " border-none"
                        value = {input}
                        onChange = {(e) => setInput(e.target.value)}
                    />
                </div>
            </div>
            {input.length !==0 && (
                <div className='w-[20rem] z-[9999] border p-2 rounded-lg bg-white absolute  shadow-lg'>
                    {data.length !==0 && data.map((ele) => (
                        <h1 key={ele._id}>{ele.name}</h1>
                    ))}
                </div>
            )}
        </section>
    )
}

export default SearchComp