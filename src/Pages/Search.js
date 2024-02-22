import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import {MenuList} from '../data/data'
import Menu from './Menu'
const Search = () => {
 
  const {title} = useParams();
  const [filterData, setFilterData] =useState([])
 
 
  useEffect (()=>{
    const filterData = () =>{
      const data =MenuList.filter((p)=>p.title.toLowerCase().includes(title.toLowerCase()))
      // console.log(data);
      setFilterData(data)
    }
    filterData
  },[title])

  return (
    <Layout>
   <product title={filterData}/>
    </Layout>
  )
}
export default Search
