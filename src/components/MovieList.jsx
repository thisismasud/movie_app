import { getMovieData } from "../data/movie";
import MovieCard from "./MovieList/MovieCard";

export default function MovieList() {
  const movies = getMovieData();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
