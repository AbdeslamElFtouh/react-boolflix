import { useState } from "react";
import "./App.css";

const API_KEY = "LA_TUA_API_KEY";
const API_URL = "https://api.themoviedb.org/3/search/movie";

function Tester() {
    const [searchText, setSearchText] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSearch = () => {
        fetch(`${API_URL}?api_key=${API_KEY}&query=${searchText}&language=it-IT`)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.log(error));
    };

    return (
        <main className="app">
            <h1>BoolFlix</h1>

            <div className="searchbar">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Cerca un film"
                />
                <button onClick={handleSearch}>Cerca</button>
            </div>

            <ul className="movie-list">
                {movies.map((movie) => (
                    <li key={movie.id} className="movie-card">
                        <h2>{movie.title}</h2>
                        <p><strong>Titolo originale:</strong> {movie.original_title}</p>
                        <p><strong>Lingua:</strong> {movie.original_language}</p>
                        <p><strong>Voto:</strong> {movie.vote_average}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Tester;