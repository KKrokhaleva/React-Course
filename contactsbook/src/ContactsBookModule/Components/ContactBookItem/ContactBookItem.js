import './ContactBookItem.css';
import editButton from './img/editButton.svg';
import removeButton from './img/removeButton.svg';

export  function ContactBookItem({contact,onContactEdit, onContactDelete}) {

    return (
        <li className="cb-item"  >
            <div className="cb-image"/>
            <div className="cb-wrapper">
                <span  id='cb-tittle'>{contact.name}   {contact.secondName} </span>
                <a className='cb-phone' href="tel: props.item.phoneNumber">{contact.phoneNumber}</a>
            </div>
            <button className="cb-button"
                    onClick={() => onContactEdit(contact.id)} >
                    <img  src={editButton} alt="'editButton"  />
            </button>

            <button className="cb-button"
                    onClick={() => onContactDelete(contact)}>
                <img src={removeButton} alt="removeButton"/>
            </button>
        </li>
    );
}
