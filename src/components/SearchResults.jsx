const langFlag = {
    en: '🇬🇧',
    fr: '🇫🇷',
    de: '🇩🇪',
    es: '🇪🇸',
    it: '🇮🇹',
    pt: '🇵🇹',
    ru: '🇷🇺',
    zh: '🇨🇳',
    hi: '🇮🇳',
    ja: '🇯🇵',
    ko: '🇰🇷',
    ar: '🇸🇦',
    br: '🇧🇷',
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

                    return (
                        <li key={id}>
                            {poster_path ? (
                                <img
                                    src={`${IMG_URL}${img_url_dimension}${poster_path}`}
                                    alt={title ? title : name}
                                />
                            ) : (
                                <div>La copertina non è disponibile</div>
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
                                <span>
                                    {langFlag[original_language] ? (
                                        langFlag[original_language] + ' ' + '(' + original_language + ')'
                                    ) : (
                                        (original_language)
                                    )}
                                </span>
                            </p>
                            <p>
                                <strong>Voto: </strong>
                                {(Math.round(vote_average)/2).toFixed(1)}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default SearchResults;
