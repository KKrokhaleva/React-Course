import React, {useEffect, useState} from "react";
import "./ModalWindow.css"

export function ModalWindow({editableContact, onEditComplete,closeContact}) {

    const [name, setName] = useState(editableContact.name);
    const [secondName, setSecondName] = useState(editableContact.secondName);
    const [phoneNumber, setPhoneNumber] = useState(editableContact.phoneNumber);
    const [saveIndicator , setSaveIndicator] = useState('saved');

    useEffect(() =>{
        setName(editableContact.name);
        setSecondName(editableContact.secondName);
        setPhoneNumber(editableContact.phoneNumber);
    }, [editableContact]);

    const onSave = () => {
        saveIndicator === 'unsaved' && onEditComplete({
            id: editableContact.id,
            name,
            secondName,
            phoneNumber
        });
        closeContact();
    }

   const onChangeFieldsHandler = (field,value) => {
        switch (field){
            case'firstName': {
                setName(value);
                break;
            }
            case'secondName': {
                setSecondName(value);
                break;
            }
            case'phoneNumber': {
                setPhoneNumber(value);
                break;
            }
        }
        setSaveIndicator('unsaved');
    }
    return (
        <div className={'modal'}>
            <div className="modal-content">
                <div className="popup">
                    <p className={'popup-title'}>Edit Contact: <strong>{editableContact.name} {editableContact.secondName}</strong></p>
                    <button className={'popup-button'} onClick={closeContact}>X</button>
                </div>
                <div className={'popup-body'}>
                    <span className="popup-img"/>
                    <div className="popup-name">
                        <span>first Name</span>
                        <input type="text" value={name} onChange={({target}) => onChangeFieldsHandler('firstName', target.value)}/>
                        <span>Last Name</span>
                        <input type="text" value={secondName} onChange={({target}) => onChangeFieldsHandler('secondName',target.value)}/>
                        <span>Phone Number</span>
                        <input type="tel" value={phoneNumber} onChange={({target}) => onChangeFieldsHandler('phoneNumber',target.value)}/>
                    </div>
                </div>
                <button className={'button-save'} onClick={onSave}>Save</button>
            </div>

        </div>
    );
}



