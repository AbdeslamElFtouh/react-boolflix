import { useState } from "react";

const API_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = import.meta.env.VITE_API_KEY;

// CREARE MODULE.CSS 

function Header() {
    // console.log(API_KEY , /* API_URL */);
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const searchHandler = (event) => {
        const target = event.target;
        const { value } = target;
        return setSearch(value);
        //console.log(search)
    }

    const clickHandler = () => {
        fetch(`${API_URL}?api_key=${API_KEY}&query=${search}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setMovies(data.results);
                //console.log(movies)
            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <>
            <h1>TITOLO</h1>
            <div>
                <input
                    type='text'
                    value={search}
                    onChange={searchHandler}
                    placeholder='Cerca un film'
                />
                <button onClick={clickHandler}>Cerca</button>
            </div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h2>
                            {movie.title}
                        </h2>
                        <p>
                            <strong>Titolo originale:</strong>
                            {movie.original_title}
                        </p>
                        <p>
                            <strong>Lingua:</strong>
                            {movie.original_language}
                        </p>
                        <p>
                            <strong>Voto:</strong>
                            {movie.vote_average}
                        </p>
                    </li>
                ))}
            </ul>

        </>
    )
}
export default Header;

