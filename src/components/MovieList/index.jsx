import React from 'react';
import Movie from '../Movie';


const MovieList = ({movies}) => (
    <>
      {movies.map(movie => <Movie title={movie.title} director={movie.director} poster={movie.poster}
      cast={movie.cast} genre={movie.genre} year={movie.year} rating={movie.rating} key={movie.id}/>)}
    </>
);

export default MovieList;