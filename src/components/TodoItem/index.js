import './index.css'

const TodoItem = props => {
  const {TodoContent} = props
  const {id, status, title} = TodoContent
  const {deleteATodo, changeTodoStatus, EditTodo} = props
  const deletethis = () => {
    deleteATodo(id)
  }
  const changeStatus = () => {
    changeTodoStatus(id, !status)
  }
  const changeTodoContent = () => {
    EditTodo(TodoContent)
  }
  // console.log(TodoContent)
  const buttonValue = status ? 'Completed' : 'Not Completed'
  const classeForbtn = status ? 'status-btn-complete' : 'status-btn-incomplete'
  const listcontitem = status ? 'todo-item-complete' : 'todo-item-incomplete'
  return (
    <li className={listcontitem}>
      <p>{title}</p>
      <div className="button-cont">
        <button onClick={deletethis} type="button" className="delete-btn">
          Delete
        </button>
        <button onClick={changeStatus} type="button" className={classeForbtn}>
          {buttonValue}
        </button>
        <button className="edit-btn" type="button" onClick={changeTodoContent}>
          Edit
        </button>
      </div>
    </li>
  )
}

export default TodoItem
