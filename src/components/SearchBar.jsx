function SearchBar({ search, searchHandler, allFictionsHandler }) {

    return (
        <>
            <div className="d-flex align-items-center">
                <input
                    type="text"
                    value={search}
                    onChange={searchHandler}
                    placeholder="Cerca un film"
                    className="form-control"
                />

                <button
                    onClick={allFictionsHandler}
                    className="btn btn-primary m-3"
                >
                    Cerca
                </button>
            </div>
        </>
    )
}
export default SearchBar;

