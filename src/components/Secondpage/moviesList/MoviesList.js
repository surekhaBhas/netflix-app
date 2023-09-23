import './MoviesList.css';
import {Link} from 'react-router-dom';

function MoviesList(props) {
   const {filterData,loading,searchTitle}=props
  
  return (
    <div>
      {!searchTitle && <h3 className='heading'>Popular on Netflix</h3>}
      <div>
        {searchTitle &&<div className='title-box'>
          <h2 className='Explore'>Explore title related to:  {filterData.map(movies=><span key={movies.title} className='Explore-names'>{movies.title}</span>)}</h2>
          </div>}
      </div>
      <ul className='movies-list'>
      {
        loading?<div>Loading...</div>:filterData.map(movie=><Link to={`/profile/${movie._id}`} key={movie.id}><li  className='movie'>
          <img src={movie.image} alt={movie.title} className='movie-image'/>
        </li></Link>)
      }
      </ul>
      
    </div>
  )
}

export default MoviesList
