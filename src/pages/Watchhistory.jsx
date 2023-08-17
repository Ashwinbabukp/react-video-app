import React, { useEffect, useState } from 'react'
import { gethistory } from '../services/allApi'
import { Link } from "react-router-dom"



function Watchhistory() {
  const [history,setHistory] = useState([])

  const getwatchhistory = async ()=>{
    const {data} = await gethistory()
    setHistory(data)
  }
  console.log(history);
  useEffect(()=>{
    getwatchhistory()
  },[])
  return (
    <>
    <div className='d-flex justify-content-between'>
      <h1>Watch History</h1>
      <Link to={"/home"} className="d-flex justify-content-end me-5">Back</Link>
    </div>
    <table className='table shadow m-3 rounded border' >
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Url</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {
          history?.map((item,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{item?.cardname}</td>
          <td>{item?.url}</td>
          <td>{item?.date}</td>
        </tr>
          ))
        }
      </tbody>
    </table>
    </>
    
  )
}

export default Watchhistory