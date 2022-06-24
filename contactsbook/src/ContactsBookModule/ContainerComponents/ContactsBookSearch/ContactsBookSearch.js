import "./ContactsBookSearch.css"

export default function ContactsBookSearch({placeholder,value,onChange} ) {
    return(
        <input className='search-contact'
            type="text"
            placeholder={placeholder || "Search"}
            value={value}
            onChange={onChange}
        />
    );
}