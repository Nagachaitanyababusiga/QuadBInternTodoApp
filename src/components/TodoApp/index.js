import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

//list of todos
const TodoListObjects = [
    { id: 1, title: 'Make Breakfast' },
    { id: 2, title: 'Read a Book' },
    { id: 3, title: 'Go for a Run' },
    { id: 4, title: 'Check Emails' },
    { id: 5, title: 'Attend Meeting' },
    { id: 6, title: 'Write Report' },
    { id: 7, title: 'Plan Dinner' },
    { id: 8, title: 'Call a Friend' },
    { id: 9, title: 'Clean the House' },
    { id: 10, title: 'Go Shopping' }
];


//creating an class Component TodoApp
class TodoApp extends Component{
    render(){
        const InitialTodoList=TodoListObjects
        //HTML CODE
        return(
        <div className="cont-1">
            <div className="cont-2">
                <h1 className='top-heading'>Todo App</h1>
                <label className='label-element' htmlFor='inputele'>Add a Todo</label>
                <input id='input-element' className='input-element' type="text"/>
                <ul className='list-cont'>
                    {InitialTodoList.map((x)=>
                    <TodoItem
                        key={x.id}
                        TodoContent={x}
                    />)}
                </ul>
            </div>
        </div>)
    }
}

export default TodoApp