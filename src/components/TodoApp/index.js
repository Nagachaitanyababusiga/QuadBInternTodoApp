import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

//list of todos
const TodoListObjects = [
    { id: 1, title: 'Make Breakfast' },
    { id: 2, title: 'Read a Book' },
    { id: 3, title: 'Go for a Run' },
    { id: 4, title: 'Check Emails' },
    { id: 5, title: 'Attend Meeting' }
];


//creating an class Component TodoApp
class TodoApp extends Component{
    state={ListObjects:TodoListObjects,inputContent:'',keyId:6}

    
    //function to delete delete a todo
    deleteATodo=(id)=>{
        this.setState({ListObjects:this.state.ListObjects.filter((x)=>x.id!==id),inputContent:this.state.inputContent,keyId:this.state.keyId})
    }
    
    //update inputelement changes dynamically
    updateInput=(event)=>{
        console.log(event.target.value);
        this.setState({ListObjects:this.state.ListObjects,inputContent:event.target.value,keyId:this.state.keyId})
    }

    AddTodo=()=>{
        const {ListObjects,inputContent,keyId}=this.state;
        if(inputContent!==''){
            ListObjects.push({id:keyId+1,title:inputContent})
            this.setState({ListObjects: ListObjects,inputContent:'',keyId:keyId+1})
        }else{
            alert('Todo title should not be Empty!!')
        }
    }

    handleKeyPress=(event)=>{
        if(event.key==='Enter'){
            this.AddTodo();
        }
    }


    render(){
        const {ListObjects}=this.state
        //HTML CODE
        return(
        <div className="cont-1">
            <div className="cont-2">
                <h1 className='top-heading'>Todo App</h1>
                <ul className='list-cont'>
                    {ListObjects.map((x)=>
                    <TodoItem
                        key={x.id}
                        TodoContent={x}
                        deleteATodo={this.deleteATodo}
                    />)}
                </ul>
                <div className='input-cont'>
                    <input id='input-ele' onChange={this.updateInput} onKeyPress={this.handleKeyPress} value={this.state.inputContent} className='input-element' type="text"/>
                    <button type='button' onClick={this.AddTodo} className='addbtn'>Add Todo</button>
                </div>
            </div>
        </div>)
    }
}

export default TodoApp