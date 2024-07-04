import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

//list of todos
const TodoListObjects = [
    { id: 1,staus:false, title: 'Make Breakfast' },
    { id: 2,staus:false, title: 'Read a Book' },
    { id: 3,staus:false, title: 'Go for a Run' },
    { id: 4,staus:false, title: 'Check Emails' },
    { id: 5,staus:false, title: 'Attend Meeting' }
];


//creating an class Component TodoApp
class TodoApp extends Component{
    state={ListObjects:TodoListObjects,inputContent:'',keyId:6}

    //Getting todos from localstorage
    componentDidMount(){
        const Mystate=localStorage.getItem('Mystate');
        if(Mystate){
            const MystateObj=JSON.parse(Mystate);
            this.setState({ListObjects: MystateObj.ListObjects,inputContent:'',keyId:MystateObj.keyId})
        }
    }

    
    //function to delete delete a todo
    deleteATodo=(id)=>{
        this.setState({ListObjects:this.state.ListObjects.filter((x)=>x.id!==id),inputContent:this.state.inputContent,keyId:this.state.keyId},
        ()=>localStorage.setItem('Mystate',JSON.stringify({ListObjects:this.state.ListObjects,keyId:this.state.keyId})));
    }
    
    //update inputelement changes dynamically
    updateInput=(event)=>{
        //console.log(event.target.value);
        this.setState({ListObjects:this.state.ListObjects,inputContent:event.target.value,keyId:this.state.keyId})
    }


    //adding a new todo
    AddTodo=()=>{
        const {ListObjects,inputContent,keyId}=this.state;
        if(inputContent!==''){
            ListObjects.push({id:keyId+1,staus:false,title:inputContent})
            this.setState({ListObjects: ListObjects,inputContent:'',keyId:keyId+1},()=>
            localStorage.setItem('Mystate',JSON.stringify({ListObjects:this.state.ListObjects,keyId:keyId+1})))
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