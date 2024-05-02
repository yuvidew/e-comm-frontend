import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyA4R1-ezOO1kzbDNJxqQuZSsbFeUY-vfPE",
    authDomain: "crud-operation-27564.firebaseapp.com",
    projectId: "crud-operation-27564",
    storageBucket: "crud-operation-27564.appspot.com",
    messagingSenderId: "1041127096487",
    appId: "1:1041127096487:web:96b8be39bef911d99e9b82",
    databaseURL : "https://crud-operation-27564-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig)

export default app