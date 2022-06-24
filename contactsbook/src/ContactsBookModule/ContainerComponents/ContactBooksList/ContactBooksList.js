import {ContactBookItem} from "../../PresentationComponents/ContactBookItem/ContactBookItem";


export default function ContactsBookList({contacts,onContactEdit,onContactDelete}) {
    return (
        <ul className='contact-list'>
            {contacts.map((contact) =>
                <ContactBookItem
                    contact={contact}
                    key={contact.id}
                    onContactEdit ={onContactEdit}
                    onContactDelete={onContactDelete}
                />
            )}
        </ul>
    );
}