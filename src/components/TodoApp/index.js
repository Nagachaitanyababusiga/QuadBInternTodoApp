import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'
import Popup from '../Popup'

//list of todos
const TodoListObjects = [
    { id: 1,status:false, title: 'Make Breakfast' },
    { id: 2,status:false, title: 'Read a Book' },
    { id: 3,status:false, title: 'Go for a Run' }
];


//creating an class Component TodoApp
class TodoApp extends Component{
    state={ListObjects:TodoListObjects,inputContent:'',keyId:6,modal:{value:false,x:null}}

    //Getting todos from localstorage
    componentDidMount(){
        const Mystate=localStorage.getItem('Mystate');
        if(Mystate){
            const MystateObj=JSON.parse(Mystate);
            this.setState({ListObjects: MystateObj.ListObjects,inputContent:'',keyId:MystateObj.keyId,modal:MystateObj.modal})
        }
    }

    
    //function to delete delete a todo
    deleteATodo=(id)=>{
        this.setState({ListObjects:this.state.ListObjects.filter((x)=>x.id!==id),inputContent:this.state.inputContent,keyId:this.state.keyId,modal:this.state.modal},
        ()=>localStorage.setItem('Mystate',JSON.stringify({ListObjects:this.state.ListObjects,inputContent:this.state.inputContent,keyId:this.state.keyId,modal:this.state.modal})));
    }
    
    //update inputelement changes dynamically
    updateInput=(event)=>{
        //console.log(event.target.value);
        this.setState({ListObjects:this.state.ListObjects,inputContent:event.target.value,keyId:this.state.keyId,modal:this.state.modal})
    }


    //adding a new todo
    AddTodo=()=>{
        const {ListObjects,inputContent,keyId,modal}=this.state;
        if(inputContent!==''){
            ListObjects.push({id:keyId+1,status:false,title:inputContent})
            this.setState({ListObjects: ListObjects,inputContent:'',keyId:keyId+1,modal:modal},()=>
            localStorage.setItem('Mystate',JSON.stringify({ListObjects:this.state.ListObjects,inputContent:this.state.inputContent,keyId:keyId+1,modal:this.state.modal})))
        }else{
            alert('Todo title should not be Empty!!')
        }
    }
    
    //change todo status
    changeTodoStatus=(curr_id,curr_status)=>{
        //console.log(curr_status)
        const {ListObjects,inputContent,keyId}=this.state;
        const value=ListObjects.map((x)=>{
            if(x.id!==curr_id) return x;
            else{
                x.status=curr_status;
                return x;
            }
        })
        //console.log(ListObjects);
        this.setState({ListObjects:value,inputContent:inputContent,keyId:keyId,modal:this.state.modal},
            ()=>localStorage.setItem('Mystate',JSON.stringify({ListObjects:this.state.ListObjects,inputContent:this.state.inputContent,keyId:this.state.keyId,modal:this.state.modal})));
    }

    //if pressed enter the form is submitted
    handleKeyPress=(event)=>{
        if(event.key==='Enter'){
            this.AddTodo();
        }
    }

    //handling model
    handleModal=(modalvalue)=>{
        const modifiedModel={value:modalvalue,x:this.state.modal.x};
        this.setState({ListObjects:this.state.ListObjects,inputContent:this.state.inputContent,keyId:this.state.keyId,modal:modifiedModel},
            ()=>localStorage.setItem('Mystate',JSON.stringify({ListObjects:this.state.ListObjects,inputContent:this.state.inputContent,keyId:this.state.keyId,modal:modifiedModel})));
    }

    //edittodo
    EditTodo=(TodoContent)=>{
        const modifiedModel={value:true,x:TodoContent};
        this.setState({ListObjects:this.state.ListObjects,inputContent:this.state.inputContent,keyId:this.state.keyId,modal:modifiedModel},()=>
            localStorage.setItem('Mystate',JSON.stringify({ListObjects:this.state.ListObjects,inputContent:this.state.inputContent,keyId:this.state.keyId,modal:modifiedModel}))
        )
    }

    //editing todo
    EditSaveChanges=(editedobject)=>{
        const modifiedModel={value:false,x:editedobject};
        const modifiedListObjects=this.state.ListObjects.map((x)=>{
            if(x.id!==editedobject.id) return x;
            else return editedobject;
        })
        this.setState({ListObjects:modifiedListObjects,inputContent:this.state.inputContent,keyId:this.state.keyId,modal:modifiedModel},()=>
            localStorage.setItem('Mystate',JSON.stringify({ListObjects:modifiedListObjects,inputContent:this.state.inputContent,keyId:this.state.keyId,modal:modifiedModel}))
        )
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
                        changeTodoStatus={this.changeTodoStatus}
                        EditTodo={this.EditTodo}
                    />)}
                </ul>
                <div className='input-cont'>
                    <input id='input-ele' onChange={this.updateInput} onKeyPress={this.handleKeyPress} value={this.state.inputContent} className='input-element' type="text"/>
                    <button type='button' onClick={this.AddTodo} className='addbtn'>Add Todo</button>
                </div>
            </div>
            <Popup EditSaveChanges={this.EditSaveChanges}  modal={this.state.modal} handleModal={this.handleModal} />
        </div>)
    }
}

export default TodoApp