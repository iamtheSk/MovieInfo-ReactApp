import React from 'react'

function MovieCard({movie}) {
  return (
    <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://cdn.head-fi.org/assets/classifieds/hf-classifieds_no-image-available_2.jpg'} alt={movie.title}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
  )
}



export default MovieCard