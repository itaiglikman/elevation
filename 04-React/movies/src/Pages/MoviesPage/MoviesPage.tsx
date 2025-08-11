import { useState } from "react";
import jsonMovies from "../../data/movies.json";
import { Movie } from "../../Components/Movie/Movie";
import "./MoviesPage.css";

export function MoviesPage() {
    const [movies, setMovies] = useState(jsonMovies);
    const [comedyOnly, setComedyOnly] = useState(false);
    const [filterText, setFilterText] = useState("");
    const [selectedMovieName, setSelectedMovieName] = useState('');


    let displayedMovies = movies;

    const filterByComedy = () => movies.filter(m => m.genres.includes('Comedy'));
    const filterByText = () => displayedMovies.filter(movie =>
        movie.name.toLowerCase().includes(filterText.toLowerCase()));

    if (comedyOnly) displayedMovies = filterByComedy();
    if (filterText) displayedMovies = filterByText();
    
    function handleSelectedMovie(movieName: string) {
        movieName === selectedMovieName
            ? setSelectedMovieName('')
            : setSelectedMovieName(movieName);
    }

    return (
        <div className="MoviesPage">
            <h1>Movies page</h1>
            <div className="filter-movies">
                <input
                    type="text"
                    placeholder="Filter movies"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)} />
                <button onClick={() => setComedyOnly(!comedyOnly)}>{comedyOnly ? 'Show all' : 'Comedy only'}</button>
            </div>
            {displayedMovies.map((m) => (
                <Movie movie={m} key={m.name}
                    isSelected={selectedMovieName === m.name}
                    onSelect={handleSelectedMovie} />
            ))}
        </div>
    );
}
