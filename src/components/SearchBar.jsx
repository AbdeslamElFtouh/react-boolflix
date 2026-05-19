// CREARE MODULE.CSS 

function SearchBar({search, searchHandler, allFictionsHandler}) {
    
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
                <button onClick={allFictionsHandler}>Cerca</button>
            </div>
        </>
    )
}
export default SearchBar;

