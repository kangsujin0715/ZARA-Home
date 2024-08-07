import React from 'react'
import { useLocation } from 'react-router-dom'

 

const BestDetail = () => {

  const songs = []  // 0~26
  for(let a=0 ; a<27 ; a++){
    songs.push({ id:a, title : `song title ${a}`})
  }  

  const ttt =  useLocation();
  console.log( ttt.slice(ttt.lastIndexOf('/')+1) );
  return (
    <div className='mt-3.5'>
        {/* <h1>BestDetail {id}</h1>
        <div>{songs[id].id}</div>
        <div>{songs[id].title}</div> */}
    </div>
  )
}

export default BestDetail