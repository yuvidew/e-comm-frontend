import React from 'react'
import Header from './Header'
import ProductFilterTools from './ProductFilterTools'
import FilterTools from './FilterTools'
import ProductsCardComp from './ProductsCardComp'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useSearchParams } from 'react-router-dom'


const ShoppingPage = () => {

    const [filterParams , setFilterParams] = useSearchParams({
        proFor : "",
        category : "",
        brand : "",
        onlyProductItems : true
    })

    const theFro = filterParams.get('proFor')
    const theCategory = filterParams.get('category')
    const theBrand = filterParams.get('brand')

    return (
        <div>
            <Header/>
            <div className=' container m-auto mt-[2rem]'>
                <section className=' flex items-start gap-x-3'>
                    <div className=' lg:block md:hidden hidden border w-[30%] '>
                        <ProductFilterTools 
                            theFro = {theFro} 
                            theCategory = {theCategory} 
                            theBrand = {theBrand} 
                            setFilterParams = {setFilterParams}
                        />
                    </div>
                    <div className='lg:w-[70%] md:w-full w-full'>
                        <div className=' flex items-center justify-between mb-3'>
                            <div className='lg:hidden md:block sm:block'>
                                <FilterTools/>
                            </div>
                            <div className=' flex items-center lg:justify-start md:justify-center justify-center'>
                                <h1>Product's <span className='text-[#f67171]'>for you</span></h1>
                            </div>
                            <div className=' flex items-center justify-end'>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                            </div>
                        </div>
                        <ProductsCardComp 
                            theFro = {theFro} 
                            theCategory = {theCategory} 
                            theBrand = {theBrand} 
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ShoppingPage