import React, { useState } from 'react'
import {
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog"
import { Key, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useLoginHook } from '@/hook/useLoginHook'

const SignUp = () => {
    const [signUpUser] = useLoginHook()
    const [form , setForm] = useState({
        email : "",
        password : "",
    })

    const handelChange = (e) => {
        const {name , value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        signUpUser(form , 'https://e-comm-qfj9.onrender.com/api/post/user/signup')
    }

    return (
        <div>
            <DialogTitle className = " font-medium"> 
                Sign Up in E-comm.<span className=' text-[#f67171]'>Store</span>
            </DialogTitle>
            <div className=' mt-[3rem]'></div>
            <DialogDescription className = "mt-[2rem]">
                <form action="" onSubmit={onSubmit}>
                    <div className=' flex items-center gap-x-2 mt-[2rem]'>
                        <Button type = "button" variant = "outline">
                            <User className='w-5 h-5'/>
                        </Button>
                        <Input 
                            value = {form.email}
                            onChange = {handelChange}
                            name = "email"
                            placeholder = "Enter Email Id.." 
                            className = "placeholder:text-black" 
                        />
                    </div>
                    <div className=' flex items-center gap-x-2 mt-[1rem]'>
                        <Button type = "button" variant = "outline">
                            <Key className='w-5 h-5'/>
                        </Button>
                        <Input 
                            value = {form.password}
                            onChange = {handelChange}
                            name = "password"
                            placeholder = "Enter Password.." 
                            className = "placeholder:text-black" 
                        />
                    </div>
                    <div className=' mt-[3rem]'>
                        <Button type = "submit" variant = "pink" className = "text-white w-full">
                            Submit
                        </Button>
                    </div>
                </form>
            </DialogDescription>
        </div>
    )
}

export default SignUp