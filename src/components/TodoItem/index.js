import './index.css'

const TodoItem =(props)=>{
    const {TodoContent} = props;
    const {id,title}=TodoContent;
    const {deleteATodo}=props;
    const deletethis=()=>{
        deleteATodo(id);
    }
    console.log(TodoContent)
    return (
    <li className='todo-item'>
        <p>{title}</p>
        <button onClick={deletethis} className='delete-btn' >
            <p>Delete</p>
        </button>
    </li>
    )
}

export default TodoItem