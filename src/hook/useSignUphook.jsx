import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import app from "../../firebase"
import { enqueueSnackbar } from "notistack"

const auth = getAuth(app)

export const useSignUpHook = () => {
    const handleSignUp = (e , p) => {
        createUserWithEmailAndPassword( auth , e, p)
        .then(v => {
            console.log( "object " , v);
            enqueueSnackbar('You are successfully sign up !', { variant: 'success' });
        }).catch(err => alert("same error"))
    }
    return [handleSignUp]
}
