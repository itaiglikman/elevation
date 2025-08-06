/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./Movie.css";

export type MovieProps = {
  movie: {
    name: string;
    runtime: number;
    year: number;
    plot: string;
    genres: Array<string>;
    poster: string;
    imdb: string;
  };
};

export function Movie({ movie }: MovieProps) {
  let { name, runtime, year, plot, genres, poster, imdb } = movie;

  const [nameValue, setName] = useState(name);

  function getTime(): string {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime - hours * 60;
    return hours + ":" + minutes;
  }

  function handleClick(genre:string) {
    setName(genre);
  }

  return (
    <div className="Movie">
      <div className="movie-poster">
        <img src={poster} />
      </div>
      <div className="info">
        <div>{nameValue}</div>
        <div>
          {year} | {getTime()}
        </div>
        <div>{plot}</div>
        <div className="genres">
          {genres.map((g) => (
            <div onClick={()=>handleClick(g)}>{g}</div>
          ))}
        </div>
        <a href={imdb} target="_blank">
          link to imdb
        </a>
      </div>
    </div>
  );
}
