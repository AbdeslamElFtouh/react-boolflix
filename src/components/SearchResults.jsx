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

function SearchResults({ allFictions }) {

    return (
        <>
            <ul>
                {allFictions.map((fiction) => {
                    const { id, title, name, original_title, original_name, original_language, vote_average } = fiction;
                    const flagPic = langFlag[original_language] ? langFlag[original_language] : original_language;

                    return (
                        <li key={id}>
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
                                {vote_average}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default SearchResults;
