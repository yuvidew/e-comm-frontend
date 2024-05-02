import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useState } from 'react'

const SearchComp = () => {
    const [input , setInput] = useState('')
    console.log(input.length);
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
                <div className='w-[20rem] border p-2 rounded-lg bg-white absolute bottom-[-3rem] shadow-lg'>
                    <h1>{input}</h1>
                </div>
            )}
        </section>
    )
}

export default SearchComp