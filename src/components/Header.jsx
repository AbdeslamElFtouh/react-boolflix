import { useState } from "react";

const API_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = import.meta.env.VITE_API_KEY;

// CREARE MODULE.CSS 

function Header() {
    // console.log(API_KEY , /* API_URL */);
    const [search, setSearch] = useState('');

    const searchHandler = (event) => {
        const target = event.target;
        const { value } = target;
        setSearch(value);
        console.log(search)
    }


    return (
        <>
            <h1>Ciao sono l'header. COMPONENTI: searchBar e il suo Button</h1>

            <h1>TITOLO</h1>
            <div className=''>
                <input
                    type='text'
                    value={search}
                    onChange={searchHandler}
                    placeholder='Cerca un film'
                />
                <button>Cerca</button>
            </div>
        </>
    )
}
export default Header;

