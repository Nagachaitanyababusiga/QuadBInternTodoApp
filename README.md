# Todo App

Welcome to the **Todo App**! This is a simple yet powerful application built with React that helps you manage your daily tasks. The app features a clean and intuitive user interface, allowing you to add, edit, delete, and mark tasks as completed. Additionally, the app saves your tasks in local storage so you won't lose them even if you close the browser.

## Features

- **Add Todos:** Quickly add new tasks by typing in the input field and pressing Enter or clicking the "Add Todo" button.
- **Edit Todos:** Edit existing tasks to update their content.
- **Delete Todos:** Remove tasks that are no longer needed.
- **Toggle Status:** Mark tasks as completed or incomplete.
- **Persistent Storage:** Your tasks are saved in local storage, so they persist across browser sessions.

### Project Demo

You can view the project demo below:

<img src="https://s12.gifyu.com/images/StbRS.gif" width="200" />
<img src="https://s10.gifyu.com/images/Stb82.gif" width="200" />


Visit TodoApp website: [QuadBtodobabu.ccbp.tech](https://QuadBtodobabu.ccbp.tech)


## Getting Started

To get started with the Todo App, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Nagachaitanyababusiga/QuadBInternTodoApp.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd todo-app
    ```

3. **Install dependencies:**

    ```sh
    npm install
    ```

4. **Start the development server:**

    ```sh
    npm start
    ```

The app will be running at [http://localhost:3000](http://localhost:3000).

## Project Structure

Here's a brief overview of the project's structure:

```plaintext
src/
├── components/
│   ├── TodoItem/
│   │   ├── index.js
│   │   ├── index.css
│   ├── Popup/
│   │   ├── index.js
│   │   ├── index.css
├── App.js
├── index.js
├── index.css
```

## Components

### TodoApp
This is the main component that manages the state of the todo list. It handles adding, deleting, editing, and toggling the status of todos. It also saves and retrieves the todo list from local storage.

### TodoItem
This component represents a single todo item. It includes buttons to edit, delete, and toggle the status of the todo.

### Popup
This component is used to edit an existing todo item. It appears as a modal when you click the edit button on a todo item.

## State Management
The app uses React's local state to manage the todo list and input content. It also utilizes the `componentDidMount` lifecycle method to retrieve the todo list from local storage when the app is loaded.

## Methods

- `componentDidMount()`: Retrieves the todo list from local storage and updates the state.
- `deleteATodo(id)`: Deletes a todo item by its ID.
- `updateInput(event)`: Updates the input field as the user types.
- `AddTodo()`: Adds a new todo item to the list.
- `changeTodoStatus(currId, currStatus)`: Toggles the status of a todo item.
- `handleKeyPress(event)`: Adds a todo item when the Enter key is pressed.
- `handleModal(modalvalue)`: Toggles the visibility of the edit modal.
- `EditTodo()`: Opens the edit modal for a specific todo item.
- `EditSaveChanges(editedObject)`: Saves the changes made to a todo item and updates the state.

## Contributing
Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.
