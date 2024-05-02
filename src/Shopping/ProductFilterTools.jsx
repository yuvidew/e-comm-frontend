import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'


const productCategory = [
    "Clothes" , "Jackets","Men Fashion", "Running", "Winter wear",
    "Party Wear", "Formal" , "Boots", "Watch",
    "Casual","Sports" , "Jewellery", "Perfume","Cosmetics"
]

const productBrand = [
    "Adidas", "Nike" , "New Balance", "Puma",
    "Under Armour" , "Reebok" , "ASICS" , 
    "Brooks" , "Saucony" , "Mizuno" , "Salomon" , "Hoka One One"
]

const ProductFilterTools = ({theFro , theCategory , theBrand ,  setFilterParams}) => {

    const handelFilter = (name , proFor) => {
        setFilterParams(prev => {
            prev.set(name , proFor)
            return prev
        } , {replace : true})
    }

    

    return (
        <aside className=' py-2 px-3 relative  '>
            <div className=' '>
                <h1 className=' text-center py-2'>
                    Filter the Products
                </h1>
                <div className=''>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className = "no-underline text-stone-600">Product For</AccordionTrigger>
                            <AccordionContent>
                                <Button 
                                    variant = {theFro == "mens" ? "filterSet" : "filterBtn" }
                                    className = "m-1"
                                    onClick = {() => {
                                        handelFilter('proFor' , 'mens')
                                    }}
                                >Men's</Button>
                                <Button 
                                    variant = {theFro == 'womens' ? "filterSet" : "filterBtn" }
                                    className = "m-1"
                                    onClick = {() => {
                                        handelFilter('proFor' , 'womens')
                                    }}
                                >Women's</Button>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className = "no-underline text-stone-600">Product category</AccordionTrigger>
                            <AccordionContent>
                                {productCategory.map(ele => (
                                    <Button 
                                        key={ele} 
                                        variant = {theCategory == ele ? "filterSet" : "filterBtn" }
                                        className = "m-1 capitalize"
                                        onClick = {() => {
                                            handelFilter('category' , ele)
                                            console.log(theCategory == ele , theCategory , ele)
                                        }}
                                    >{ele}</Button>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className = "no-underline text-stone-600">Product Brand's</AccordionTrigger>
                            <AccordionContent>
                                {productBrand.map(ele => 
                                    <Button 
                                        key={ele} 
                                        variant = {theBrand == ele ? "filterSet" : "filterBtn" }
                                        className = "m-1 capitalize"
                                        onClick = {() => {
                                            handelFilter('brand' , ele)
                                        }}
                                    >{ele}</Button>)}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </aside>
    )
}

export default ProductFilterTools