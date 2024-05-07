import React, { useEffect } from 'react'
import Header from '../Header'
import { useParams } from 'react-router-dom'
import useFetch from '@/hook/useFetch'
import { Button } from '@/components/ui/button'
import { ShoppingBasket } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

const ShoppingCardPage = () => {
    const params = useParams()
    const [data , getData , postData] = useFetch()
    useEffect(() => {
        getData(`https://e-comm-qfj9.onrender.com/api/get/product/${params.id}`)
    } , params.id)

    const onAddCard = async (id) => {
        let obj = {
            id : localStorage.getItem('cardId'),
            productId : id,
            qty : 1,
        }
        await postData('http://localhost:2000/api/patch/card' , obj)
    }

    return (
        <div>
            <Header/>
            { data.length !== 0 ?
            (
                <section className=' container m-auto mt-[1rem]'>
                    <article className=' flex items-start gap-5'>
                        <div className=' w-[60%]  '>
                            <div className=' p-2 flex items-center gap-2 border border-stone-300 rounded-lg shadow-sm'>
                                <div className=' w-[50%] h-[20rem]'>
                                    <img className=' w-full h-full object-contain' src={data.image} alt="" />
                                </div>
                                <div className=' w-[50%]'>
                                    <h3 className=' text-[1.2rem] mb-3'>Brand name is <span className='active'>{data.brand}</span></h3>
                                    <h4 className='mb-[2rem]'>
                                        <Button variant = "outline">
                                            for <span className='active ml-2'>{data.for}</span>
                                        </Button>
                                    </h4>
                                    <div className='flex items-center gap-x-3'>
                                        <h2 className=' text-stone-600 text-[1.5rem]'>$ {data.newPrice}.00/-</h2>
                                        <span className='text-stone-400 line-through'>$ {data.oldPrice}.00/-</span>
                                    </div>
                                </div>
                            </div>
                            <div className=' p-4 mt-[1rem] border border-stone-300 rounded-lg shadow-sm'>
                                <h1 className=' text-[1.3rem] active'>{data.name}</h1>
                                <p className=' mt-[.6rem]'>{data.description}</p>
                            </div>
                        </div>
                        <div className=' w-[40%] p-4 border border-stone-300 rounded-lg shadow-sm'>
                            <h2 className=' mb-3'>Add the Product in your card..</h2>

                            <Button 
                                variant = "pink" 
                                className = "w-full text-[#fff]"
                                onClick = {() => onAddCard(data._id)}
                            >
                                Add to Card
                                <ShoppingBasket className=' h-5 w-5 ml-2' />
                            </Button>
                        </div>
                    </article>
                </section>
            )
            : (
                <section className=' container m-auto mt-[1rem]'>
                    <article className=' flex items-start gap-5'>
                        <div className=' w-[60%] h-[20rem]'>
                            <Skeleton className=" w-full h-full rounded-xl" />
                            <div className=' mt-[1rem] h-[5rem]' >
                                <Skeleton className=" w-full h-full rounded-xl" />
                            </div>
                        </div>
                        <div className=' w-[40%] h-[6.5rem]'>
                            <Skeleton className=" w-full h-full rounded-xl" />
                        </div>
                    </article>
                </section>
            )}
        </div>
    )
}

export default ShoppingCardPage