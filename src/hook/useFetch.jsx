import axios from 'axios'
import { useState } from 'react'

const useFetch =  () => {
    const [data , setData] = useState([])

    const getData = async (url) => {
        try {
            const res  = await axios(url)
            setData(res.data)
        } catch (error) {
            setData(null)
        }
    }

    return [data , getData]
}

export default useFetch