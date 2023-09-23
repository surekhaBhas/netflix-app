import {useEffect,useState} from 'react'
import axios from 'axios';
import './VideoPlay.css'
import { useParams,Link } from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai'
function VideoPlay() {
     
     const [source,setSource]=useState('')
    const {id}=useParams()
    useEffect(()=>{
        const getVideo=async()=>{
            try{
                const res=await axios.get(`http://localhost:5500/movies/${id}`)
                setSource(res.data[0].trailer)   
            }catch(err){
                console.log(err)
            }
        }
        getVideo()
    },[])

  return (
    <div className='video-container'>
      <Link to={`/movies`}><button className='reset'><AiOutlineClose/></button></Link>
      <iframe src={source} width="90%" height="600px" title={source} ></iframe>

    </div>
  )
}

export default VideoPlay
