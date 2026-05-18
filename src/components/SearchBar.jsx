// CREARE MODULE.CSS 

function SearchBar({search, searchHandler, clickHandler}) {
    
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
        </>
    )
}
export default SearchBar;

