export default function Button({country, active, setSelected, id}) {
    return(
        <li>
            <button 
            className={active ? "btn active" : "btn"} 
            onClick={() => setSelected(id)}>
                 {country}
            </button>
        </li>
    )
}
