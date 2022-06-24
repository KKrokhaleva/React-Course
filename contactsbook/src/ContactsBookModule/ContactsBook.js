import './ContactsBook.css'
import {useMemo, useState} from "react";
import ContactsBookList from "./ContainerComponents/ContactBooksList/ContactBooksList";
import ContactsBookSearch from "./ContainerComponents/ContactsBookSearch/ContactsBookSearch";
import {ModalWindow} from "./PresentationComponents/ModalWindow/ModalWindow";

const INITIAL_DATA =  [
    {id: 1, name: "Andres ", secondName:"Garcia",  phoneNumber:"+ 38 (012) 345 67 89"},
    {id: 2, name: "Anna ",secondName:"Delvey", phoneNumber:"+ 38 (012) 345 67 89"},
    {id: 8, name: "Anna ",secondName:"Sorokina", phoneNumber:"+ 38 (012) 345 67 89"},
    {id: 4, name: "Bob ",secondName:"Garisson", phoneNumber:"+ 38 (012) 345 67 89"},
    {id: 5, name: "Jane ",secondName:"Doe", phoneNumber:"+ 38 (012) 345 67 89"},
    {id: 6, name: "John  ",secondName:"Doe", phoneNumber:"+ 38 (012) 462 67 83"},
    {id: 7, name: "Robert ",secondName:"Person", phoneNumber:"+ 38 (012) 422 57 83"},
];

export function ContactsBook() {

    const [contacts, setContacts] = useState(INITIAL_DATA)
    const [selectedContactId, setSelectedContactId] = useState(null);
    const [search,setSearch] = useState('');

    const searchedContacts =  useMemo(() => {
            return contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase())
            || contact.secondName.toLowerCase().includes(search.toLowerCase())
            || contact.phoneNumber.toLowerCase().includes(search.toLowerCase()));
            }, [search,contacts]
    );

    const selectedContact =  useMemo(() =>{
        return searchedContacts.find(contact => contact.id===selectedContactId);
    }, [selectedContactId,searchedContacts]
    );

    const closeContact = () => {
       setSelectedContactId (null);
    }

    const removeContact = (contact)=> {
        setContacts (contacts.filter(c=> c.id!==contact.id))
    }

    const onEditComplete = (changedContact)=> {
        const newContacts = contacts.slice();
        const contactIndex = newContacts.findIndex(contact => contact.id ===changedContact.id);
        newContacts.splice(contactIndex,1, changedContact);
        setContacts(newContacts);
    }

    return (
            < >
                <div className="header">
                    <div className="header-title">
                        <h1 >Contacts Book</h1>
                        <p>Made by Krokhaleva Kateryna</p>
                    </div>
                    <a className="header-link" href="https://github.com/KKrokhaleva"> My GitHub Account </a>
                </div>

                <ContactsBookSearch
                    placeholder= "Search"
                    value = {search}
                    onChange={e =>setSearch(e.target.value)}
                />

                <ContactsBookList
                    contacts={searchedContacts}
                    onContactEdit={setSelectedContactId}
                    onContactDelete={removeContact}
                />

                { ( typeof selectedContactId ==='number')
                    ? <ModalWindow closeContact={closeContact} editableContact={selectedContact} onEditComplete={onEditComplete}/>
                    : <></>
                }
            </>
        );
}
