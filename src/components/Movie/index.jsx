import React from 'react';
import Actor from '../Actor';
import './style.css';

const Movie = ({title, poster, year, rating, director, genre, cast}) => (

    <div className="movie">
      <div className="movie-photo">
      <div className="rating">{rating}/10</div>
      <img src={`assets/${poster}`} alt={title} />
      </div>
      <div className="movie-text">
      <h4>{title}</h4>
      <div><b>Rok vydání:</b> {year}</div>
      <div><b>Žánr:</b> {genre}</div>
      <div><b>Režie:</b> {director}</div>
      <h5>V hlavních rolích:</h5>
      <div className="cast">
      {cast.map(c => <Actor name={c.name} as={c.as} key={c.name}/>)}
      </div>
      </div>
    </div>
);

export default Movie;