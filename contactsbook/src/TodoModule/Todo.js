import {TodoForm} from './Components/TodoForm/TodoForm';
import {TodoList} from './Components/TodoList/TodoList';
import {TodoSearch} from "./Components/TodoSearch/TodoSearch";
import {MainArea} from "./Components/MainArea/MainArea";
import './Todo.css';
import './Components/MainArea/MainArea.css';
import {useState,useMemo} from "react";

const INITIAL_DATA_LIST = [
    {id: 1, title: "Water Plants", description: "on the kitchen, dining room and first floor.", completed: false, history: []},
    {id: 2, title: "Pack the bags", description: "preparation for trip to London", completed: false, history: []},
    {id: 3, title: "Charge laptop", description: "preparation for trip to London", completed: false, history: []},
    {id: 4, title: "Post homeworks to Hillel Courses", description: "React Group from 30.04.2022", completed: false, history: []},
    {id: 5, title: "Make backup of HDD", description: "Use TimeMachine for that", completed: false, history: []},
]


export function Todo() {

    const [list, setList] = useState(INITIAL_DATA_LIST);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [search,setSearch] = useState('');

    const searchedItems =  useMemo(() => {
            return list.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
        }, [search,list]
    );

    const createItem = (newItem) => {
        setList([...list, newItem]);
    }
    const onItemCompleteHandler = (id) => {
        const item = list.find((todoItem) => todoItem.id === id);
        const updatedItem = {...item, completed: !item.completed};
        setList(list.map((todoItem) => todoItem.id === id ? updatedItem : todoItem));
    }

    const onItemDeleteHandler = (id) => {
        setList(list.filter((todoItem) => todoItem.id !== id));
        if (selectedTodo.id===id) {
            setSelectedTodo(null);
        }
    }



    const onEditComplete = (changedItem)=> {
        const editItem = list.slice();
        const itemIndex = editItem.findIndex(item => item.id ===changedItem.id);
        editItem.splice(itemIndex,1, changedItem);
        setList(editItem);
        setSelectedTodo(changedItem);
    }

    return (
        <div className='head-page'>
            <div className="LeftSidebar">
                <TodoForm
                    value = {search}
                    onChange={e =>setSearch(e.target.value)}
                />
                <TodoList
                    currentTodo={searchedItems}
                    setSelectedTodo={setSelectedTodo}
                    itemComplete={onItemCompleteHandler}
                    itemDelete={onItemDeleteHandler}
                />
                <TodoSearch createItem={createItem}/>
            </div>

            { selectedTodo
                ? <MainArea selectedTodo={selectedTodo} onEditComplete={onEditComplete}/>
                : <h1 className={"ns"}>Nothing Selected</h1>
            }

        </div>
    );
}
