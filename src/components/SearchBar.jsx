// CREARE MODULE.CSS 

function SearchBar({search, searchHandler, fetchAllFictionsHandler}) {
    
    return (
        <>
            <h1>Boolflix</h1>
            <div>
                <input
                    type='text'
                    value={search}
                    onChange={searchHandler}
                    placeholder='Cerca un film'
                />
                <button onClick={fetchAllFictionsHandler}>Cerca</button>
            </div>
        </>
    )
}
export default SearchBar;

