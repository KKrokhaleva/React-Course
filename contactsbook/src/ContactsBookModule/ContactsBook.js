import './ContactsBook.css'
import {useMemo, useReducer} from "react";
import ContactsBookList from "./Components/ContactBookList/ContactBooksList";
import ContactsBookSearch from "./Components/ContactsBookSearch/ContactsBookSearch";
import {ModalWindow} from "./Components/ModalWindow/ModalWindow";
import reducer, {EDIT_CONTACT, REMOVE, SEARCH_TEXT, SELECTED_CONTACT_ID,INITIAL_DATA} from '../reducer';




export function ContactsBook() {
    const [state,dispatch] = useReducer(reducer, INITIAL_DATA);

    const searchedContacts =  useMemo(() => {
            return state.contacts.filter(contact => contact.name.toLowerCase().includes(state.search.toLowerCase())
            || contact.secondName.toLowerCase().includes(state.search.toLowerCase())
            || contact.phoneNumber.toLowerCase().includes(state.search.toLowerCase()));
            }, [state.search,state.contacts]
    );

    const selectedContact =  useMemo(() =>{
        return searchedContacts.find(contact => contact.id===state.selectedContactId);
    }, [state.selectedContactId,searchedContacts]);

    const closeContact = () => {
       dispatch({
           type: SELECTED_CONTACT_ID,
           payload: null
       })
    }

    const removeContact = (contact)=> {
        dispatch({
            type: REMOVE,
            payload: contact.id
        })
    }

    const onEditComplete = (changedContact)=> {
        dispatch({
            type: EDIT_CONTACT,
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
                    onChange={e => {
                        dispatch({
                        type: SEARCH_TEXT,
                        payload: e.target.value
                    })
                    }}
                />

                <ContactsBookList
                    contacts={searchedContacts}
                    onContactEdit={(id)=>{
                        dispatch({
                            type: SELECTED_CONTACT_ID,
                            payload: id
                        })
                    }}
                    onContactDelete={removeContact}
                />

                { ( typeof state.selectedContactId ==='number')
                    ? <ModalWindow closeContact={closeContact} editableContact={selectedContact} onEditComplete={onEditComplete}/>
                    : <></>
                }
            </>
        );
}
