import React from 'react';
import {Link} from "react-router-dom"
// import Favorites from '../Pages/Favorites';

function MovieCard({ movie }) {
  const { title, vote_average, poster_path,id } = movie;

  return (
    <div className='movieCard'>
      <Link to={`movie/${id}`}>
      <img
        className='moviePoster'
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
    
        alt={title}/> 
          
        </Link>
    
      <div className="movieCardFooter">
        <div className='movieCardDetails'>
          <h2 className="movieCardTitle">{title}</h2>
          <p className="movieCardRating">{vote_average}</p>
        </div>
        <div className="favButton">
        
        </div>
      </div>
      {/* <Favorites/> */}
    </div>
  );
}

export default MovieCard;
