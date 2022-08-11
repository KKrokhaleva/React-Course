import React, {useReducer} from "react";
import "./ModalWindow.css"


export function ModalWindow({editableContact, onEditComplete, closeContact}) {

    const initialFunction = {
        name: editableContact.name,
        secondName: editableContact.secondName,
        phoneNumber: editableContact.phoneNumber,
        saveIndicator: 'saved'
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case'firstName': {
                return {...state, name: action.payload, saveIndicator: 'unsaved'}
            }
            case'secondName': {
                return {...state, secondName: action.payload, saveIndicator: 'unsaved'}
            }
            case'phoneNumber': {
                return {...state, phoneNumber: action.payload, saveIndicator: 'unsaved'}
            }
            default: return state
        }

    }

    const [state, dispatch] = useReducer(reducer, initialFunction);


    const onSave = () => {
        state.saveIndicator === 'unsaved' && onEditComplete({
            id: editableContact.id,
            name: state.name,
            secondName: state.secondName,
            phoneNumber: state.phoneNumber
        });
        closeContact();
    }


    return (
        <div className='modal'>
            <div className="modal-content">

                <div className="popup">
                    <p className='popup-title'>Edit Contact: <strong>{state.name} {state.secondName}</strong></p>
                    <button className='popup-button' onClick={closeContact}>X</button>
                </div>

                <div className='popup-body'>
                    <span className="popup-img"/>

                    <div className="popup-name">
                        <span>first Name</span>

                        <input type="text"
                               value={state.name}
                               onChange={({target}) => dispatch({
                                   type: 'firstName',
                                   payload: target.value
                               })}/>

                        <span>Last Name</span>

                        <input type="text"
                               value={state.secondName}
                               onChange={({target}) =>
                                   dispatch({
                                       type: 'secondName',
                                       payload: target.value
                                   })}/>

                        <span>Phone Number</span>

                        <input type="tel"
                               value={state.phoneNumber}
                               onChange={({target}) =>
                                   dispatch({
                                       type: 'phoneNumber',
                                       payload: target.value
                                   })}/>

                    </div>
                </div>
                <button className='button-save' onClick={onSave}>Save</button>
            </div>
        </div>
    );
}



