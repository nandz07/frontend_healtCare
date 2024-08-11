import React, { useEffect, useState } from 'react'
// import { token } from '../config'
import { toast } from 'react-toastify';

function useFetchData(url,admin=false) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        let token = localStorage.getItem('token');
        if(admin) token=localStorage.getItem('adminToken');
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                const result = await res.json()

                if (!res.ok) {
                    // return toast.error(result.message)
                    throw new Error(result.message +'😔')
                }
                setData(result.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(err.message)
            }
        }
        fetchData()
    }, [url])
    return {
        data,loading,error
    }
}

export default useFetchData