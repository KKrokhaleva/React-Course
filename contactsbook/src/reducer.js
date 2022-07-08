export const REMOVE = "REMOVE";
export const SEARCH_TEXT = "SEARCH_TEXT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const SELECTED_CONTACT_ID = "SELECTED_CONTACT_ID";
export const INITIAL_DATA =  {
    contacts: [{id: 1, name: "Andres ", secondName:"Garcia",  phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 2, name: "Anna ",secondName:"Delvey", phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 8, name: "Anna ",secondName:"Sorokina", phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 4, name: "Bob ",secondName:"Garisson", phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 5, name: "Jane ",secondName:"Doe", phoneNumber:"+ 38 (012) 345 67 89"},
        {id: 6, name: "John  ",secondName:"Doe", phoneNumber:"+ 38 (012) 462 67 83"},
        {id: 7, name: "Robert ",secondName:"Person", phoneNumber:"+ 38 (012) 422 57 83"}],
    selectedContactId : null,
    search: '',
}
export default function reducer (state,action) {

    switch (action.type) {

        case REMOVE :
            return {...state, contacts: state.contacts.filter(c=> c.id!== action.payload)}

        case SEARCH_TEXT :
            return {...state, search: action.payload}

        case SELECTED_CONTACT_ID :
            return {...state, selectedContactId: action.payload }
        case EDIT_CONTACT :
            const newContacts = state.contacts.slice();
            const contactIndex = state.contacts.findIndex(contact => contact.id ===action.payload.id);
           newContacts.splice(contactIndex,1, action.payload);
            return {...state, contacts: newContacts};

        default: return state;
    }
}