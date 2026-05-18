function SearchResults({allFictions}) {
    return (
        <>
            <ul>
                {allFictions.map((fiction) => (
                    <li key={fiction.id}>
                        <h2>
                            {fiction.title?fiction.title:fiction.name}
                        </h2>
                        <p>
                            <strong>Titolo originale: </strong>
                            {fiction.original_title?fiction.original_title:fiction.original_name}
                        </p>
                        <p>
                            <strong>Lingua: </strong>
                            {fiction.original_language}
                        </p>
                        <p>
                            <strong>Voto: </strong>
                            {fiction.vote_average}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default SearchResults;
