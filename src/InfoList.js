export default function InfoList({flag, continent, language, population}) {
    return (
        <ul className="content">
            <div className="flag">
                <img src={flag} alt=""/>
            </div>
            <li>Continent: <span>{continent}</span></li>
            <li>Language: <span>{language}</span></li>
            <li>Population: <span>{population}</span></li>
        </ul>
    )
}