import axios from 'axios'
import { useState } from 'react'

const useFetch =  () => {
    const [data , setData] = useState([])

    const getData = async (url) => {
        try {
            const res  = await axios.get(url)
            setData(res.data)
        } catch (error) {
            setData(null)
        }
    }

    const postData = async (url , obj) => {
        try {
            const res = await axios.patch(url , obj)
            if(res.status == 201){
                alert(res.data.msg)
            }else{
                alert(res.data.msg)
            }
        } catch (error) {
            alert('something is wrong..')
        }
    }

    return [data , getData , postData]
}

export default useFetch