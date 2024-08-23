import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFoundPage from './NotFoundPage'
import Spinner from '../components/Spinner/Spinner'
import Country from '../components/Country/Country'
const SingleCountryPage = () => {
  const {id} = useParams()
  const [data,setData] = useState([])
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const getCountryData = async ()=>{
        try{
            const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`)
            if(!res.ok){
                throw new Error('Error fetching data')
            }
            const data = await res.json()
            setData(data)
            
            setError(false)
        }
        catch{
            setError(true)
        }finally{
            setLoading(false)
        }
    }
    getCountryData()
  },[])
  console.log(data)
  return (
    <>
        {loading && <Spinner/>}
        {error && <NotFoundPage/>}
        {data.length!==0 &&<Country country = {data[0]}/>}
    </>
    
  )
}

export default SingleCountryPage