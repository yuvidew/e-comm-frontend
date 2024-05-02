import React from 'react'
import { NavLink } from 'react-router-dom'
import './HomeStyle.css'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import Authentication from '@/ExtraComp/Authentication'

const Header = () => {
    const itsTrue = localStorage.getItem("userAuth")

    return (
        <header className=' h-[5rem] '>
            <div className=' container m-auto h-full  lg:px-5 '>
                <main className=' flex items-center justify-between h-full '>
                    <div className="h-full flex items-center justify-start w-[50%] ">
                        <NavLink to={'/'}>
                            <h1 className=' lg:text-[1.6rem] md:text-[2rem] text-[1.5rem]'><span className=' text-muted-foreground'>E-Comm</span>.Store</h1>
                        </NavLink>
                    </div>
                    <div className=' h-full flex items-center justify-end w-[50%]'>
                        <nav className='  h-full lg:flex md:flex hidden items-center justify-start gap-x-4'>
                            <NavLink to={'/shopping'} className={" text-muted-foreground "} activeClassName = {"active"}>
                                Shopping
                            </NavLink>
                            <NavLink to={'/contacts'} className={" text-muted-foreground "} activeClassName = {"active"}>
                                Contacts
                            </NavLink>
                            <NavLink to={'/blog'} className={" text-muted-foreground "} activeClassName = {"active"}>
                                Blog's
                            </NavLink>
                            <div className={itsTrue !== null ? "hidden" : 'block'}>
                                {<Authentication />}
                            </div>
                        </nav>
                        <Button className = "lg:hidden md:hidden block bg-[#f67171] hover:bg-[#f67171c7]">
                            <MenuIcon/>
                        </Button>
                    </div>
                </main>
            </div>
        </header>
    )
}

export default Header