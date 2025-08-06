import { Movie } from "../Movie/Movie";
import "./MoviesPage.css";
import jsonMovies from "../../data/movies.json";

export function MoviesPage() {
  const movies = jsonMovies;

  return (
    <div className="MoviesPage">
      {movies.map((m) => (
        <Movie movie={m} key={m.id} />
      ))}
    </div>
  );
}
