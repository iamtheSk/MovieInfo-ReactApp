import React,{ useEffect, useState } from 'react'

import './App.css';

import MovieCard from './components/Movie';

const API_URL = //Here Paste Your Own Api URL from https://www.omdbapi.com/apikey.aspx



function App() {

    const [Movies,setMovies] = useState([]);

    const [Search,setSearch] = useState('')

    // for search movies through api
    // async means asynchoronus that means need some time
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);

        const data = await response.json();

        setMovies(data.Search)
    }


// Second dependence array for only call at start
useEffect(()=>{
    searchMovies();
},[])



  return (
    <div>

    <div className="container">
    <h1>Movie Info</h1>

    <div className="search-container">


{/* Search input */}
    <input
    className="movie-name"
    placeholder="Enter movie name here..."
    onChange={(e) =>{setSearch(e.target.value)}}
     value={Search}
    />

{/* Search button */}

    <button
    onClick={()=>{searchMovies(Search)}}
    >Search</button>
    </div>

    </div>
    {
        Movies?.length > 0
        ?(
            <div className='containers'>
            {Movies.map((movie,index)=>{ return (<MovieCard key={index} movie={movie}/>)})}
             </div>

        ) : (
             <div className='empty'>
                    <h2>No Movies Found</h2>
             </div>
        )
    }


        <a href='https://github.com/iamtheSk/MovieInfo-ReactApp.git'><i className="fa-brands fa-github"></i> Source Code</a>
    </div>
  )
}

export default App