import React from 'react';
import Movie from '../Movie';
import './style.css';


const MovieList = ({movies}) => (
    <div className="container">
      {movies.map(movie => <Movie title={movie.title} director={movie.director} poster={movie.poster}
      cast={movie.cast} genre={movie.genre} year={movie.year} rating={movie.rating} key={movie.id}/>)}
    </div>
);

export default MovieList;