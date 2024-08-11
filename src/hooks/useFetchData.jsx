import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

function useFetchData(url, admin = false) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        let token = localStorage.getItem('token');
        if (admin) token = localStorage.getItem('adminToken');

        setLoading(true);
        try {
            const res = await fetch(url, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message + ' 😔');
            }
            setData(result.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [url, admin]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        data,
        loading,
        error,
        refetchData: fetchData, // Add this line to return the refetch function
    };
}

export default useFetchData;
