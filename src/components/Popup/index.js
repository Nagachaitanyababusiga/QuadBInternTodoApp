import './index.css'

const Popup = props => {
  const {modal, EditSaveChanges, handleModal} = props
  const {value, x} = modal
  let id
  let status
  let title
  if (x !== null) {
    id = x.id
    status = x.status
    title = x.title
  }

  const toggleModal = () => {
    handleModal(!value)
  }

  const saveChanges = () => {
    // console.log(id);
    // console.log(status);
    const inputValue = document.getElementById('edit-para-body')
    // console.log(inputValue.value);
    if (inputValue.value !== '') {
      EditSaveChanges({id, status, title: inputValue.value})
    } else alert("Todos Title can't be empty!")
  }

  const buttonValue = status ? 'Yes Completed' : 'Not Completed'
  const classForbtn = status
    ? 'edit-status-btn-complete'
    : 'edit-status-btn-incomplete'

  const editChangeStatus = () => {
    status = !status
    const button = document.getElementById('edit-status-button')
    // console.log(status)
    if (button) {
      button.textContent = status ? 'Yes Completed' : 'Not Completed'
      button.className = status
        ? 'edit-status-btn-complete'
        : 'edit-status-btn-incomplete'
    }
  }

  // console.log(x)

  if (value) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {value && (
        <div className="modal">
          <div
            role="button"
            tabIndex={0}
            onClick={toggleModal}
            className="overlay"
            aria-label="Toggle Modal"
          />
          <div className="modal-content">
            <h2>EDIT TODO</h2>
            <label htmlFor="para-body" style={{fontWeight: 'bold'}}>
              Enter new Title
            </label>
            <input
              className="edit-input-element"
              id="edit-para-body"
              defaultValue={title}
            />
            <button className="close-modal" type="button" onClick={toggleModal}>
              CLOSE
            </button>
            <button
              type="button"
              id="edit-status-button"
              onClick={editChangeStatus}
              className={classForbtn}
            >
              {buttonValue}
            </button>
            <button
              onClick={saveChanges}
              type="button"
              className="edit-save-btn"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
