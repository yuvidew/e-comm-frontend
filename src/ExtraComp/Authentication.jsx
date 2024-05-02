import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import Login from './Login'
import SignUp from './SignUp'

const Authentication = () => {
    const [isTrue , setIsTrue] = useState(false)
    return (
        <Dialog className = "ml-3">
        <DialogTrigger>
            <Button variant = "pink" className = "text-white">LogIn <LogIn className=' h-5 w-5 ml-2' /></Button>
        </DialogTrigger>
        <DialogContent>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className = "w-full mb-2">
                    <TabsTrigger value="login" className = "w-[50%]">Login</TabsTrigger>
                    <TabsTrigger value="signup" className = "w-[50%]">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Login />
                </TabsContent>
                <TabsContent value="signup">
                    <SignUp/>
                </TabsContent>
            </Tabs>
        </DialogContent>
        </Dialog>

    )
}

export default Authentication