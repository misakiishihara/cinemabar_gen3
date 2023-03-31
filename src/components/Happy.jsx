import React, { useState, useEffect } from "react";
import Movie from "./Movie";

function Happy() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=[d4a2b9fed55b0afbf4684b3e3a6f3e8b]&with_genres=35,10751&sort_by=popularity.desc&vote_count.gte=1000"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <h2>Happy Movies</h2>
      <div className="movie-list">
        {movies?.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            poster={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}

export default Happy;