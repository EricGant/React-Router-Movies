import React from 'react';
import {Route, Link, useParams, useRouteMatch } from 'react-router-dom'

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(mov => (
        <Link key={mov.id} to={`/Movies/MovieList/${mov.id}`}> <MovieDetails key={mov.id} movie={mov} /></Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
