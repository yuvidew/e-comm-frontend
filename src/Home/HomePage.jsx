import React from 'react'
import Header from './Header'
import './HomeStyle.css'
import SearchComp from './SearchComp'
import { Card, CardContent } from '@/components/ui/card'
import ScrollProList from './ScrollBarImageArr'
import ProductsSection from './ProductsSection'

const HomePage = () => {
    
    return (
        <div>
            <Header/>
            <div className=' container px-0'>
                <section className=' h-[30rem] mt-1'>
                    <div className=' h-full HomePageBg rounded-lg'>
                        <section className=' flex items-start h-full w-[85%] m-auto justify-center flex-col gap-y-1'>
                            <h1 className=' text-[2.5rem] font-bold text-[#2b2b2bc3]'>Store for Every one</h1>
                            <h3 className=' text-[1.8rem] text-[#2e2e2eaa]'>shopping with joy</h3>
                            <SearchComp/>
                        </section>
                    </div>
                </section>
                <section className='h-[6rem] mt-[4rem]'>
                    <div className=' theScrollBar relative overflow-x-scroll mb-5 h-full'>
                        <div className=' flex items-center left-0 top-0 absolute gap-x-3 h-full'>
                            {ScrollProList.map(items => (
                                <Card key={items.text} className = {"w-[20rem] h-full  shadow-md p-0 "}>
                                    <CardContent className = "flex items-center h-full gap-x-2 p-0 ">
                                        <div className=' w-[30%] h-full flex items-center justify-center'>
                                            <img className=' h-[65%] w-[60%] bg-slate-300 rounded-lg border p-3 object-contain' src={items.img} alt="" />
                                        </div>
                                        <div className=' w-[60%] h-full flex flex-col items-start justify-around '>
                                            <div className="flex items-center w-full  justify-between">
                                                <h3 className=''>{items.text}</h3>
                                                <p className=' text-xs text-[#f67171]'>({items.num})</p>
                                            </div>
                                            <h3 className='text-xs text-[#f67171] mb-1'>Shop Now</h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <ProductsSection/>
            </div>
        </div>
    )
}

export default HomePage