import './ContactsBook.css'
import {useMemo, useReducer} from "react";
import ContactsBookList from "./ContainerComponents/ContactBooksList/ContactBooksList";
import ContactsBookSearch from "./ContainerComponents/ContactsBookSearch/ContactsBookSearch";
import {ModalWindow} from "./PresentationComponents/ModalWindow/ModalWindow";
import {reducer} from "../reducer";

const INITIAL_DATA =  {
    contacts : [
        {id: 1, name: "Andres ", secondName:"Garcia",  phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 2, name: "Anna ",secondName:"Delvey", phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 8, name: "Anna ",secondName:"Sorokina", phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 4, name: "Bob ",secondName:"Garisson", phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 5, name: "Jane ",secondName:"Doe", phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 6, name: "John  ",secondName:"Doe", phoneNumber:"+ 38 (012) 462 67 83"},
        {id: 7, name: "Robert ",secondName:"Person", phoneNumber:"+ 38 (012) 422 57 83"},
    ],
    selectedContactId: null,
    search: ''
}

export function ContactsBook() {
   const[state, dispatch] = useReducer(reducer,INITIAL_DATA)

    const searchedContacts =  useMemo(() => {
            return state.contacts.filter(contact => contact.name.toLowerCase().includes(state.search.toLowerCase())
            || contact.secondName.toLowerCase().includes(state.search.toLowerCase())
            || contact.phoneNumber.toLowerCase().includes(state.search.toLowerCase()));
            }, [state.search,state.contacts]
    );

    const selectedContact =  useMemo(() =>{
        return searchedContacts.find(contact => contact.id===state.selectedContactId);
    }, [state.selectedContactId,searchedContacts]
    );

    const closeContact = () => {
       dispatch({
           type: 'close',
           payload: null
       });
    }

    const removeContact = (contact)=> {
        dispatch({
            type: 'delete',
            payload: contact.id
        })
    }

    const onEditComplete = (changedContact)=> {
        dispatch({
            type: 'edit',
            payload: changedContact
        })
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
                    value = {state.search}
                    onChange={e =>
                        dispatch({
                            type : 'SEARCH_TEXT',
                            payload:e.target.value
                        })}
                />

                <ContactsBookList
                    contacts={searchedContacts}
                    onContactEdit={(id)=>{dispatch({
                        type: 'selected_contact_id',
                        payload: id
                    })}}
                    onContactDelete={removeContact}
                />

                { ( typeof state.selectedContactId ==='number')
                    ? <ModalWindow closeContact={closeContact} editableContact={selectedContact} onEditComplete={onEditComplete}/>
                    : <></>
                }
            </>
        );
}
