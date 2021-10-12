import React from 'react';
import Actor from '../Actor';


const Movie = ({title, poster, year, rating, director, genre, cast}) => (
    <>
      <div>{rating}</div>
      <img src={`assets/${poster}`} alt={title} />
      <h2>{title}</h2>
      <div><b>Rok vydání:</b>{year}</div>
      <div><b>Žánr:</b>{genre}</div>
      <div><b>Režie:</b>{director}</div>
      <h3>V hlavních rolích:</h3>
      {cast.map(c => <Actor name={c.name} as={c.as} key={c.name}/>)}
    </>
);

export default Movie;