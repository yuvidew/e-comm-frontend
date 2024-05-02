import { Button } from '@/components/ui/button'
import { Shirt } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchComp from './SearchComp'
import CardDataComp from './CardDataComp'

const Header = () => {
    return (
        <header>
            <div className=' container m-auto h-[5rem] '>
                <main className=' flex items-center justify-between h-full'>
                    <div className=' flex items-center justify-start gap-x-3 h-full w-[50%]'>
                        <NavLink to={'/'}>
                            <Button variant = "pink">
                                    <Shirt className=' h-6 w-6 text-stone-100' />
                            </Button>
                        </NavLink>

                        <NavLink to={'/shopping'} className={" text-muted-foreground ml-4"} activeClassName = {"active"}>
                                Shopping
                        </NavLink>
                        <NavLink to={'/contacts'} className={" text-muted-foreground "} activeClassName = {"active"}>
                            Contacts
                        </NavLink>
                        <NavLink to={'/blog'} className={" text-muted-foreground "} activeClassName = {"active"}>
                            Blog's
                        </NavLink>
                    </div>
                    <div className=' flex items-center justify-end gap-x-5 h-full w-[50%]'>
                        <SearchComp/>
                        <CardDataComp/>
                    </div>
                </main>
            </div>
        </header>
    )
}

export default Header