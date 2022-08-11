import {TodoItem} from "../TodoItem/TodoItem";
import './TodoList.css';


export function TodoList({ currentTodo, setSelectedTodo, itemComplete,itemDelete,editableTodo }) {

    // console.log(currentTodo);

    return (
        <div className="TodoList">
            <ul>
                {currentTodo.map((todoItem) =>
                    <TodoItem
                        item={todoItem}
                        key={todoItem.id}
                        editableTodo ={editableTodo}
                        setSelectedTodo={setSelectedTodo}
                        itemComplete={itemComplete}
                        itemDelete={itemDelete}
                    />
                )}
            </ul>
        </div>
    );
}