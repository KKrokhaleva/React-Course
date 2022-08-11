import './MainArea.css';
import {useEffect, useState} from "react";

export function MainArea({selectedTodo, onEditComplete}) {
    const [description, setDescription] = useState(selectedTodo.description);
    const [saveIndicator, setSaveIndicator] = useState('saved');

    useEffect(() => {
        setDescription(selectedTodo.description || "");
    }, [selectedTodo]);

    const onChangeFieldsHandler = (value) => {
        setDescription(value);
        setSaveIndicator('unsaved');
    }
    const onSave = () => {
        saveIndicator === 'unsaved' && onEditComplete({
            ...selectedTodo,
            description,
            history: [
                {
                    field: "description",
                    action: "edit",
                    prevValue: selectedTodo.description,
                    currentValue: description,
                    appliedAt: new Date()
                },
                ...selectedTodo.history
            ],
        });
    }


    return (
        <div className='description-wrapper'>

            <h2 className="main-area-header">
                {selectedTodo.title}
            </h2>

            <textarea
                value={description}
                placeholder="Description"
                onChange={({target}) => onChangeFieldsHandler(target.value)}
                className="main-area-description"
            />
            
            <button className='button-save' onClick={onSave}>Save</button>
            <h2 className="history">History</h2>
            <ul className="history-list">
                {selectedTodo.history.map(item => (
                        <li className="history-wrapper">
                            <div>{(item)}</div>
                            <div>{item.appliedAt.toDateString()} at {item.appliedAt.toLocaleTimeString()} </div>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}