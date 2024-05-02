
import { useSnackbar } from 'notistack'
import axios from 'axios'

export const useLoginHook = () => {
    const {enqueueSnackbar} = useSnackbar()
    const signInUser = async(email , p) => {
        const res = await axios.post('https://e-comm-qfj9.onrender.com/api/post/user/signin' , {
            email
        })
        console.log(res);

        if(res.status == 201){
            localStorage.setItem('userAuth' , res.data.auth)
            if(res.data.cardId != null){
                localStorage.setItem('cardId' , res.data.cardId)
            }
            window.location.reload()
        }else{
            enqueueSnackbar(res.data.msg, { variant: 'error' })
        }
    }
    return [signInUser]
}
