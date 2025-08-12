/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./Movie.css";

export default interface MovieType {
    name: string;
    runtime: number;
    year: number;
    plot: string;
    genres: Array<string>;
    poster: string;
    imdb: string;
}

export type MovieProps = {
    movie: MovieType;
    isSelected: boolean;
    onSelect: (name: string) => void
};

export function Movie({ movie, isSelected, onSelect }: MovieProps) {
    let { name, runtime, year, plot, genres, poster, imdb } = movie;

    const [nameValue, setName] = useState(name);

    function getTime(): string {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime - hours * 60;
        return hours + ":" + minutes;
    }

    function handleClick(genre: string) {
        setName(genre);
    }

    return (
        <div className={'Movie' + (isSelected ? ' selected' : '')}>
            <div className="movie-poster" onClick={() => onSelect(movie.name)}>
                <img src={poster} />
            </div>
            <div className="info">
                <div>{nameValue}</div>
                <div>
                    {year} | {getTime()}
                </div>
                <div>{plot}</div>
                <div className="genres">
                    {genres.map((g,i) => (
                        <div key={i} onClick={() => handleClick(g)}>{g}</div>
                    ))}
                </div>
                <a href={imdb} target="_blank">
                    link to imdb
                </a>
            </div>
        </div>
    );
}
