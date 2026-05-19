import styles from './SearchResults.module.css';

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
            <ul className="d-flex flex-wrap justify-content-center gap-4 bg-dark p-4 list-unstyled">
                {allFictions.map((fiction) => {
                    const { id,
                        title,
                        name,
                        original_title,
                        original_name,
                        original_language,
                        vote_average,
                        poster_path,
                        overview
                    } = fiction;

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
                        <li key={id} className={`position-relative overflow-hidden rounded text-white ${styles.cardContainer}`}>
                            {poster_path ? (
                                <img
                                    src={`${IMG_URL}${img_url_dimension}${poster_path}`}
                                    alt={title ? title : name}
                                    className='w-100 h-100 object-fit-cover'
                                />
                            ) : (
                                <img
                                    src='PlaceholderCopertinaAssente.jpg'
                                    alt="Placeholder Copertina Assente"
                                    className="w-100 h-100 object-fit-cover"
                                />
                            )}
                            <div className={`position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3 ${styles.infoOverlay}`}>
                                <h2 className="fs-3 fw-bold mb-2">
                                    {title ? title : name}
                                </h2>
                                <p className="fs-6 mb-1">
                                    <strong>Titolo originale: </strong>
                                    {original_title ? original_title : original_name}
                                </p>
                                <p className="fs-6 mb-1 d-flex gap-2">
                                    <strong>Lingua: </strong>
                                    {langFlag[original_language] ? (
                                        <span className={`fi fi-${langFlag[original_language]}`}></span>
                                    ) : (
                                        original_language
                                    )}
                                </p>
                                <p className="fs-6 mb-1">
                                    <strong>Voto: </strong>
                                    {votoInStelle}
                                </p>
                                <hr />
                                <p className={`small mt-1 ${styles.overview}`}>
                                    {overview}
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default SearchResults;