import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React, { useEffect } from 'react'
import useFetch from '../hook/useFetch'
import ProductCard from './ProductCard'

const ProductsSection = () => {
    const [data  , getData] = useFetch()
    useEffect(() => {
        getData('https://e-comm-qfj9.onrender.com/api/get/products')
    } , [])
    
    return (
        <section className=' mt-[4rem]'>
            <div className=' flex items-center justify-between px-4 mb-3'>
                <h1 className=' text-[1.2rem] text-stone-800'>Popular Product's</h1>
                <Button variant = "pink" className = " rounded-lg text-stone-100 hover:text-stone-200">See More <ArrowRight className=' h-4 w-4 ml-2' /></Button>
            </div>
            <section className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 px-3'>
                {( data.length !== 0) && 
                data.map((ele , index) =>{
                    if(index < 10){
                    return (
                    <article key={ele._id} className=''>
                        <ProductCard items = {ele} />
                    </article>
                    )
                }}
                )}
            </section>
        </section>
    )
}

export default ProductsSection