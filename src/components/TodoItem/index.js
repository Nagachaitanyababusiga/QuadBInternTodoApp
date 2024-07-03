import './index.css'

const TodoItem =(props)=>{
    const {TodoContent} = props;
    const {id,title}=TodoContent;
    console.log(id);
    return (
    <li>
        <p>{title}</p>
    </li>
    )
}

export default TodoItem