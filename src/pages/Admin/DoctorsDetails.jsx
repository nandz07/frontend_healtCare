import React, { useEffect, useState } from 'react'
import DoctorsTable from '../../components/Admin/DoctorsTable'
import { BASE_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import Error from '../../components/Error/Error'
import Loader from '../../components/Loader/Loading'

function DoctorsDetails() {
    const [query, setQuery] = useState('')
    const [debounceQuery, setDebounceQuery] = useState('')

    const handleSearch = () => {
        setQuery(query.trim())
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceQuery(query.trim())
        }, 700)
        return () => clearTimeout(timeout)
    }, [query])
    const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/admin/doctors?query=${debounceQuery}`, true)
    return (
        <>
            <section className="bg-[#fff9ea] py-5">
                <div className="container flex items-center justify-between">

                    <h3 className="font-semibold text-lg mr-4">Doctors</h3>

                    <div className="flex-grow max-w-[570px] bg-[#0066ff2c] rounded-md flex items-center">
                        <input
                            type="search"
                            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer"
                            placeholder="Search doctor by name or specifications"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </section>


            <section className='py-5'>
                <div className="container p-0">
                    {loading && <Loader />}
                    {error && <Error />}
                    {!loading && !error && (<div className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-4 w-full'>
                            <div className='bg-white px-4 pb-4 rounded-md border border-gray-200 flex-1'>
                                <DoctorsTable doctors={doctors} />
                            </div>
                        </div>
                    </div>)}
                </div>
            </section>
        </>
    )
}

export default DoctorsDetails