import './index.css'

const TodoItem =(props)=>{
    const {TodoContent} = props;
    const {id,status,title}=TodoContent;
    const {deleteATodo,changeTodoStatus,EditTodo}=props;
    const deletethis=()=>{
        deleteATodo(id);
    }
    const changeStatus=()=>{
        changeTodoStatus(id,!status);
    }
    const changeTodoContent=()=>{
        EditTodo(TodoContent);
    }
    //console.log(TodoContent)
    const button_value=status?"Completed":"Not Completed";
    const classeForbtn=status?"status-btn-complete":"status-btn-incomplete";
    const listcontitem=status?"todo-item-complete":"todo-item-incomplete";
    return (
    <li className={listcontitem}>
        <p>{title}</p>
        <div className='button-cont'>
           <button onClick={deletethis} className='delete-btn' >
                Delete
            </button> 
            <button onClick={changeStatus} className={classeForbtn}>
                {button_value}
            </button>
            <button className='edit-btn' onClick={changeTodoContent}>
                Edit
            </button>
        </div>
        
    </li>
    )
}

export default TodoItem