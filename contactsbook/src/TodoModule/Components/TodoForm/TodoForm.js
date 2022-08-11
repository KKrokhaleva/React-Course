import './TodoForm.css';

export function TodoForm({value,onChange}) {


    return (
        <form className="TodoForm" >
            <h1 className="TodoFormHeader">Todos</h1>
            <input
                className="TodoFormInput"
                type="text"
                placeholder="Search"
                value={value}
                onChange={onChange}
            />
        </form>
    );

}