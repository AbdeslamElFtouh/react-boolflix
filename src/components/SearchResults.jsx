const langFlag = {
    en: 'gb',
    fr: 'fr',
    de: 'de',
    es: 'es',
    it: 'it',
    pt: 'pt',
    ru: 'ru',
    zh: 'cn',
    hi: 'in',
    ja: 'jp',
    ko: 'kr',
    ar: 'sa',
};

const IMG_URL = 'https://image.tmdb.org/t/p/';
const img_url_dimension = 'w342'

function SearchResults({ allFictions }) {
    return (
        <>
            <ul>
                {allFictions.map((fiction) => {
                    const { id,
                        title,
                        name,
                        original_title,
                        original_name,
                        original_language,
                        vote_average,
                        poster_path,
                    } = fiction;

                    /* Logica recensione in stelle */
                    const votoInQuinti = Number((Math.round(vote_average) / 2).toFixed(1));

                    const votoInStelle = [];

                    for (let i = 1; i <= 5; i++) {
                        if (votoInQuinti >= i) {
                            votoInStelle.push(<i key={i} className='bi bi-star-fill text-warning'></i>);
                        } else if (votoInQuinti >= i - 0.5) {
                            votoInStelle.push(<i key={i} className='bi bi-star-half text-warning'></i>);
                        } else {
                            votoInStelle.push(<i key={i} className='bi bi-star text-warning'></i>);
                        }
                    }

                    return (
                        <li key={id}>
                            {poster_path ? (
                                <img
                                    src={`${IMG_URL}${img_url_dimension}${poster_path}`}
                                    alt={title ? title : name}
                                />
                            ) : (
                                <img
                                    src='PlaceholderCopertinaAssente.jpg'
                                    alt="Placeholder Copertina Assente"
                                />
                            )}
                            <h2>
                                {title ? title : name}
                            </h2>
                            <p>
                                <strong>Titolo originale: </strong>
                                {original_title ? original_title : original_name}
                            </p>
                            <p>
                                <strong>Lingua: </strong>
                                {langFlag[original_language] ? (
                                    <span className={`fi fi-${langFlag[original_language]}`}></span>
                                ) : (
                                    original_language
                                )}
                            </p>
                            <p>
                                <strong>Voto: </strong>
                                {votoInStelle}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default SearchResults;

