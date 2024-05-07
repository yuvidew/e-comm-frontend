
import axios from 'axios'

export const useLoginHook = () => {
    const signInUser = async(email , url) => {
        const res = await axios.post(url , {
            email : email
        })
        console.log("the result " , res);

        if(res.status == 201){
            localStorage.setItem('userAuth' , res.data.auth)
            window.location.reload()
        }if(res.status == 400){
            alert(res.data.msg)
        }
    }
    const signUpUser = async (userData, url) => {
        const res = await axios.post(url , userData)
        if(res.status == 201){
            localStorage.setItem('cardId' , res.data.cardId)
            alert(res.data.msg)
        }

        if(res.status == 401){
            alert(res.data.msg)
        }

        if(res.status == 400){
            alert(res.data.msg)
        }
    }
    return [signInUser , signUpUser]
}
