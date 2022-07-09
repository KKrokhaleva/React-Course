

export function reducer (state,action) {
    switch (action.type) {

        case 'delete':
            return {...state ,contacts: state.contacts.filter(contact=> contact.id !== action.payload)}

        case 'close':
            return {...state,selectedContactId: action.payload}

        case "selected_contact_id":
            return {...state, selectedContactId: action.payload}

        case 'SEARCH_TEXT' :
            return {...state, search: action.payload}

        case 'edit':
            const newContacts = state.contacts.slice();
            const contactIndex = newContacts.findIndex(contact => contact.id ===action.payload.id);
            newContacts.splice(contactIndex,1, action.payload);
            return {...state, contacts: newContacts}

        default: return state
    }
}