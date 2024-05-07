import React, { useState } from 'react'
import {
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog"
import { Key, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useLoginHook } from '@/hook/useLoginHook'

const Login = () => {
    const [signInUser] = useLoginHook()
    const [email , setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        signInUser(email , 'https://e-comm-qfj9.onrender.com/api/post/user/signin')
    }

    return (
        <div>
            <DialogTitle className = " font-medium"> 
                Login in E-comm.<span className=' text-[#f67171]'>Store</span>
            </DialogTitle>
            <div className=' mt-[3rem]'></div>
            <DialogDescription className = "mt-[2rem]">
            <form action="" onSubmit={handleSubmit}>
                <div className=' flex items-center gap-x-2 mt-[2rem]'>
                    <Button type = "button" variant = "outline">
                        <User className='w-5 h-5'/>
                    </Button>
                    <Input 
                        placeholder = "Enter Email Id.." 
                        className = "placeholder:text-black" 
                        onChange = {(e) => setEmail(e.target.value)}
                        value = {email}
                        name = "email"
                    />
                </div>
                <div className=' mt-[2rem]'>
                    <Button variant = "pink" className = "text-white w-full">
                        Submit
                    </Button>
                </div>
            </form>
            </DialogDescription>
        </div>
    )
}

export default Login