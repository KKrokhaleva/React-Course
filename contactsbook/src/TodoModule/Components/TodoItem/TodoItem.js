import './TodoItem.css';

const getCompletionStatus = status => status ? 'completed' : 'default';

export function TodoItem({itemComplete, itemDelete, item, setSelectedTodo}) {

    return (
        <div className="todo-item" onClick={() => setSelectedTodo(item)}>
            <span className="todo-item-complete"
                  onClick={() => itemComplete(item.id)}>{item.completed ? '✔' : ''}️</span>
            <div className="todo-item-wrapper">
                <span
                    className={getCompletionStatus(item.completed)}
                    id={'item-tittle'}
                >
                    {item.title}
                </span>
                <span className={getCompletionStatus(item.completed)} id={'item-description'}>{item.description}</span>
            </div>

            <span
                className="delete"
                onClick={(e) => {
                    e.stopPropagation();
                    itemDelete(item.id);
                }}
            >
                ❌
            </span>
        </div>
    );
}
