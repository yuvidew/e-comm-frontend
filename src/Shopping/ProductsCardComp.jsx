import useFetch from '@/hook/useFetch'
import React, { useEffect } from 'react'
import ProductCard from './ProductCard'

const ProductsCardComp = ({theFro , theCategory , theBrand}) => {
    const [data  , getData] = useFetch()

    useEffect(() => {

        getData(`https://e-comm-qfj9.onrender.com/api/get/products?for=${theFro}&category=${theCategory || ""}&brand=${theBrand || "" }`)
        if(theFro || theCategory || theBrand){
        }else{
            getData(`https://e-comm-qfj9.onrender.com/api/get/products`)
        }

    } , [theFro ,theCategory ,theBrand])

    console.log(data  );

    return (
        <section className=' grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4'>
            {(data.length !== 0) ?
                ( data.map((ele , index) =>(
                <article key={ele._id} className=' overflow-hidden'>
                    <ProductCard items = {ele} />
                </article>
                )))
                : (
                    <div className=' flex items-center justify-center h-[30vh] w-full'>
                        <h1 className=' text-center'>Loading...</h1>
                    </div>
                )
            }
        </section>
    )
}

export default ProductsCardComp