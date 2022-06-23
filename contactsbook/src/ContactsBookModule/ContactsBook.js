import './ContactsBook.css'
import {useMemo, useState} from "react";
import ContactsBookList from "./ContainerComponents/ContactBooksList/ContactBooksList";
import ContactsBookSearch from "./ContainerComponents/ContactsBookSearch/ContactsBookSearch";
import {ModalWindow} from "./PresentationComponents/ModalWindow/ModalWindow";

export function ContactsBook() {

    const [contacts, setContacts] = useState( [
        {id: 1, name: "Andres ", secondName:"Garcia",  phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 2, name: "Anna ",secondName:"Delvey", phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 3, name: "Anna ",secondName:"Sorokina", phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 4, name: "Bob ",secondName:"Garisson", phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 5, name: "Jane ",secondName:"Doe", phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 6, name: "John  ",secondName:"Doe", phoneNumber:"+ 38 (012) 462 67 83"},
        {id: 7, name: "Robert ",secondName:"Person", phoneNumber:"+ 38 (012) 422 57 83"},
    ])

    const [selectedContactId, setSelectedContactId] = useState(false);
    const [search,setSearch] = useState('');
    const searchedContacts = useMemo(() => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase())
            || contact.secondName.toLowerCase().includes(search.toLowerCase())
            || contact.phoneNumber.toLowerCase().includes(search.toLowerCase()))
    }, [search,contacts]);

    const selectedContact =  searchedContacts.find(contact => contact.id===selectedContactId);
    const closeContact = () => {
       setSelectedContactId (false);
    }

    const removeContact = (contact)=> {
        setContacts (contacts.filter(c=> c.id!==contact.id))
    }

    const onEditComplete = (ChangedContact)=> {
        searchedContacts.splice(ChangedContact.id-1,1, ChangedContact);
    }

    return (
            <div className="ContactsBook">
                <div className="header">
                    <div className="header-title">
                        <h1 >Contacts Book</h1>
                        <p>Made by Krokhaleva Kateryna</p>
                    </div>
                    <a className={"header-link"} href="https://github.com/KKrokhaleva"> My GitHub Account </a>
                </div>


                <ContactsBookSearch
                    placeholder={ "Search"}
                    value = {search}
                    onChange={e =>setSearch(e.target.value)}
                />

                <ContactsBookList
                    contacts={searchedContacts}
                    onContactEdit={setSelectedContactId}
                    onContactDelete={removeContact}
                />
                { selectedContactId
                    ? <ModalWindow closeContact={closeContact} editableContact={selectedContact} onEditComplete={onEditComplete}/>
                    : <></>
                }
            </div>
        );
}
