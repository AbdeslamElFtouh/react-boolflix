import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";

import MainLayout from "./layouts/MainLayout";
import SearchResults from "./components/SearchResults.jsx";
import NotFound from "./pages/NotFound.jsx";

const MOVIE_API_URL = 'https://api.themoviedb.org/3/search/movie';
const SERIES_API_URL = 'https://api.themoviedb.org/3/search/tv';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  // console.log(API_KEY , /* API_URL */);
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const fetchMovies = () => {
    console.log('orainizioa afetchare')
    return fetch(`${MOVIE_API_URL}?api_key=${API_KEY}&query=${search}`)
      .then((response) => {
        
        return response.json()
      })
      .then((data) => {
        console.log(data.results)
        setMovies(data.results);
      })
      .catch((error) => {
        console.error(error)
      });
  };

  const fetchSeries = () => {
    return fetch(`${SERIES_API_URL}?api_key=${API_KEY}&query=${search}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setSeries(data.results);
        console.log(series)
      })
      .catch((error) => {
        console.error(error)
      });
  };

  const allFictionsHandler = () => {
    return (fetchMovies(), fetchSeries());
  }

  const allFictions = [...movies, ...series]

  const searchHandler = (event) => {
    const target = event.target;
    const { value } = target;
    setSearch(value);
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route element={
          <MainLayout
            search={search}
            searchHandler={searchHandler}
            allFictionsHandler={allFictionsHandler}
          />
        }>

          <Route index element={
            <SearchResults
              allFictions={allFictions}
            />
          } />

          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
