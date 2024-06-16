import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
    const [videos,setVideos]=useState([])
    const getVideos=async()=>{
       const data= await fetch(YOUTUBE_API)
       let json= await data.json()
       setVideos(json.items)
    }
    useEffect(()=>{
        getVideos();
    },[])
  return (
    <div className='flex flex-wrap'>
    {videos.map((v) => <Link to={"/watch?v="+v.id}>
        <VideoCard key={v.id} info={v} />
    </Link>)}
  </div>
  
  )
}

export default VideoContainer