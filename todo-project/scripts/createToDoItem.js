import {addToLocalStorage} from "./handleLocalStorage.js";
import {todoLocalStorage} from "../constants.js";
import {createActionButtons} from "./createActionButtons.js";

export const createToDoItem = (value) => {

    if(!value || value.length === 0) {
        return;
    }

    const id = typeof  value === 'string' ? Date.now() : value.id;

    const todoList = document.getElementById('list-container');
    const todoDiv = document.createElement('div');
    const textP = document.createElement('p');

    todoDiv.classList.add('todo-item');
    todoDiv.id = id;

    const buttons = createActionButtons(todoDiv)

    if(typeof  value === 'string') {
        textP.innerText = value;
        let todoInfo = {
            id,
            text: value,
            completed: false,
        };

        addToLocalStorage(todoLocalStorage, todoInfo);
    } else{
        textP.innerText = value.text;

        value.completed ? todoDiv.classList.add('completed') : todoDiv.classList.remove('completed');
    }

    todoDiv.appendChild(textP);
    todoDiv.appendChild(buttons);
    todoList.appendChild(todoDiv);
}