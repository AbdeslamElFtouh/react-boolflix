import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";

import MainLayout from "./layouts/MainLayout";
import SearchResults from "./components/SearchResults.jsx";
import NotFound from "./pages/NotFound.jsx";

const API_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
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
    <BrowserRouter>
      <Routes>

        <Route element={
          <MainLayout
            search={search}
            searchHandler={searchHandler}
            clickHandler={clickHandler}
          />
        }>

          <Route index element={
            <SearchResults
              movies={movies}
            />
          }/>

          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
