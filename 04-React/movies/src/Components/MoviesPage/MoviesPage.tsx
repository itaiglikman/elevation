import { Movie } from "../Movie/Movie";
import "./MoviesPage.css";

export function MoviesPage() {
  const movies = [
    {
      name: "Forrest Gump",
      runtime: 142,
      year: 1994,
      plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      genres: ["Drama", "Comedy"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
      imdb: "https://www.imdb.com/title/tt0109830/",
    },
    {
      name: "Inception",
      runtime: 148,
      year: 2010,
      plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      genres: ["Action", "Sci-Fi", "Thriller"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
      imdb: "https://www.imdb.com/title/tt1375666/",
    },
    {
      name: "The Shawshank Redemption",
      runtime: 142,
      year: 1994,
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      genres: ["Drama"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      imdb: "https://www.imdb.com/title/tt0111161/",
    },
  ];

  return (
    <div className="MoviesPage">
      {movies.map((m, index) => (
        <Movie movie={m} key={index} />
      ))}
    </div>
  );
}
