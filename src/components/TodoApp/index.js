import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'
import Popup from '../Popup'

// list of todos
const TodoListObjects = [
  {id: 1, status: false, title: 'Make Breakfast'},
  {id: 2, status: false, title: 'Read a Book'},
  {id: 3, status: false, title: 'Go for a Run'},
]

// creating an class Component TodoApp
class TodoApp extends Component {
  state = {
    ListObjects: TodoListObjects,
    inputContent: '',
    keyId: 6,
    modal: {value: false, x: null},
  }

  // Getting todos from localstorage
  componentDidMount() {
    const Mystate = localStorage.getItem('Mystate')
    if (Mystate) {
      const MystateObj = JSON.parse(Mystate)
      this.setState({
        ListObjects: MystateObj.ListObjects,
        inputContent: '',
        keyId: MystateObj.keyId,
        modal: MystateObj.modal,
      })
    }
  }

  // function to delete delete a todo
  deleteATodo = id => {
    this.setState(prevState => {
      const {ListObjects, inputContent, keyId, modal} = prevState

      const newListObjects = ListObjects.filter(x => x.id !== id)

      // Update localStorage asynchronously after setState
      localStorage.setItem(
        'Mystate',
        JSON.stringify({
          ListObjects: newListObjects,
          inputContent,
          keyId,
          modal,
        }),
      )

      return {
        ListObjects: newListObjects,
        inputContent,
        keyId,
        modal,
      }
    })
  }

  // update input
  updateInput = event => {
    const inputContent = event.target.value

    this.setState(prevState => ({
      ...prevState,
      inputContent,
    }))
  }

  // adding a new todo
  AddTodo = () => {
    const {ListObjects, inputContent, keyId, modal} = this.state

    if (inputContent !== '') {
      const updatedListObjects = [
        ...ListObjects,
        {id: keyId + 1, status: false, title: inputContent},
      ]

      this.setState(
        {
          ListObjects: updatedListObjects,
          inputContent: '',
          keyId: keyId + 1,
          modal,
        },
        () =>
          localStorage.setItem(
            'Mystate',
            JSON.stringify({
              ListObjects: updatedListObjects,
              inputContent: '',
              keyId: keyId + 1,
              modal,
            }),
          ),
      )
    } else {
      alert('Todo title should not be Empty!!')
    }
  }

  changeTodoStatus = (currId, currStatus) => {
    const {ListObjects, inputContent, keyId, modal} = this.state

    const updatedListObjects = ListObjects.map(x =>
      x.id !== currId ? x : {...x, status: currStatus},
    )

    this.setState(
      {
        ListObjects: updatedListObjects,
        inputContent,
        keyId,
        modal,
      },
      () =>
        localStorage.setItem(
          'Mystate',
          JSON.stringify({
            ListObjects: updatedListObjects,
            inputContent,
            keyId,
            modal,
          }),
        ),
    )
  }

  // if pressed enter the form is submitted
  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.AddTodo()
    }
  }

  // handling model
  handleModal = modalvalue => {
    const {ListObjects, inputContent, keyId, modal} = this.state

    const modifiedModal = {value: modalvalue, x: modal.x}

    this.setState(
      {
        ListObjects,
        inputContent,
        keyId,
        modal: modifiedModal,
      },
      () =>
        localStorage.setItem(
          'Mystate',
          JSON.stringify({
            ListObjects,
            inputContent,
            keyId,
            modal: modifiedModal,
          }),
        ),
    )
  }

  // edittodo
  EditTodo = TodoContent => {
    const {ListObjects, inputContent, keyId} = this.state

    const modifiedModal = {value: true, x: TodoContent}

    this.setState(
      {
        ListObjects,
        inputContent,
        keyId,
        modal: modifiedModal,
      },
      () =>
        localStorage.setItem(
          'Mystate',
          JSON.stringify({
            ListObjects,
            inputContent,
            keyId,
            modal: modifiedModal,
          }),
        ),
    )
  }

  // editing todo
  EditSaveChanges = editedObject => {
    const {ListObjects, inputContent, keyId} = this.state

    const modifiedModel = {value: false, x: editedObject}

    const modifiedListObjects = ListObjects.map(x =>
      x.id !== editedObject.id ? x : editedObject,
    )

    this.setState(
      {
        ListObjects: modifiedListObjects,
        inputContent,
        keyId,
        modal: modifiedModel,
      },
      () =>
        localStorage.setItem(
          'Mystate',
          JSON.stringify({
            ListObjects: modifiedListObjects,
            inputContent,
            keyId,
            modal: modifiedModel,
          }),
        ),
    )
  }

  render() {
    const {ListObjects, inputContent, modal} = this.state
    // HTML CODE
    return (
      <div className="cont-1">
        <div className="cont-2">
          <h1 className="top-heading">Todo App</h1>
          <ul className="list-cont">
            {ListObjects.map(x => (
              <TodoItem
                key={x.id}
                TodoContent={x}
                deleteATodo={this.deleteATodo}
                changeTodoStatus={this.changeTodoStatus}
                EditTodo={this.EditTodo}
              />
            ))}
          </ul>
          <div className="input-cont">
            <input
              id="input-ele"
              onChange={this.updateInput}
              onKeyPress={this.handleKeyPress}
              value={inputContent}
              className="input-element"
              type="text"
            />
            <button type="button" onClick={this.AddTodo} className="addbtn">
              Add Todo
            </button>
          </div>
        </div>
        <Popup
          EditSaveChanges={this.EditSaveChanges}
          modal={modal}
          handleModal={this.handleModal}
        />
      </div>
    )
  }
}

export default TodoApp
