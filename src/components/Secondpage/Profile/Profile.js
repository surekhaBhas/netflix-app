import {useEffect,useState} from 'react'
import {useParams,useNavigate,Link} from 'react-router-dom';
import './Profile.css'
import axios from 'axios'
import {BsFillPlayFill} from 'react-icons/bs'


function Profile() {
  const { id } = useParams()
  const navigate=useNavigate()
  const [movieData,setMovieData]=useState([])
  const [loading,setLoading]=useState(true)
  const [play,setPlay]=useState(false);
  const [info,setInfo]=useState(false)
  const [moviesData,setMoviesData]=useState([])
  useEffect(()=>{
    const getMovieData=async()=>{
      try{
          const res=await axios.get(`http://localhost:5500/movies/${id}`)
          setMovieData(res.data[0])
          setLoading(false)
      }catch(err){
       console.log(err)
      }
    }
    getMovieData() 
    const getALlMovies=async()=>{
      try{
      const res=await axios.get(`http://localhost:5500/movies`)
      setMoviesData(res.data)
    }catch(err){
      console.log(err)
    }
    }
    getALlMovies()
  },[])
 
  const playHandler=()=>{
    setPlay(prev=>!prev)
  }

  const infoHandler=()=>{
    setInfo(prev=>!prev)
  }

  const goBack=()=>{
    navigate(-1)
  }
  
  const changingId=(movie)=>{
    setMovieData(movie)
  }
  return (
    <div>
      
      {loading && <div>Loading</div>}
      {!loading && <div className='profile-box'>
        <img src={movieData.image} className='profile-background' alt={movieData.title}/>
        <button className='reset' onClick={goBack}>Back</button>
        <div className='profile-details'>
       <p className='available'>Available Now</p>
       <p>{movieData.description}</p>
       <div className='tab-box'>
        <Link to={`/play/${movieData._id}`}><button className={play?'active play':'inActive play'} onClick={playHandler}><BsFillPlayFill/>Play</button></Link>
        <button className={info?'active info':'inActive info'} onClick={infoHandler}>More info</button>
       </div>
        {
          !play && info?<div className='info-container'>
            <div className='thumbnail'>
              <img src={movieData.thumbnail} alt={movieData.title}/>
               <h3>{movieData.title}</h3>
            </div>
            <div>
              <p>{movieData.description}</p>
              <p>Director: <span>{movieData.director}</span></p>
              <p>Genre: <span>{movieData.genre.join(', ')}</span></p>
              <p>writers: <span>{movieData.writers.join(', ')}</span></p>
              <p>Released Year :<span>{movieData.year}</span></p>
              <p>Imdb id: <span>{movieData.imdbid}</span></p>
              <p>Rating: <span>{movieData.rating}</span></p>
            </div>
          </div>:null
        }
        </div>
        <div className='trending-videos'>
          <h3>Trending Now</h3>
          <ul className='trending'>
            {moviesData.length?moviesData.map(movie=><li key={movie._id}><button onClick={() => changingId(movie)}>
              <img src={movie.image} alt={movie.title}/>
            </button></li>):null}
          </ul>
        </div>
      </div>
      }
    </div>
  )
}

export default Profile
