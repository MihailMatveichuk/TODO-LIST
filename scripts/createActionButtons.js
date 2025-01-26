import {deleteLocalStorage, updateLocalStorage} from "./handleLocalStorage.js";

const todoList = document.getElementById('list-container');

const createDeleteButton = (tidoItem) => {
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(tidoItem);
        deleteLocalStorage('todos', tidoItem.id);
    });

    return deleteBtn;
}

const createCompletedButton = (tidoItem) => {
    const completedBtn = document.createElement("button");
    completedBtn.classList.add("completed-button");
    completedBtn.innerText = "Completed";

    completedBtn.addEventListener('click', () => {
        tidoItem.classList.toggle('completed');
        updateLocalStorage('todos', tidoItem.id, {completed: tidoItem.classList.contains('completed')});
    });

    return completedBtn;
}

export const createActionButtons = (tidoItem) => {
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    const deleteBtn = createDeleteButton(tidoItem);
    const completedBtn = createCompletedButton(tidoItem);

    buttonsDiv.appendChild(deleteBtn);
    buttonsDiv.appendChild(completedBtn);

    return buttonsDiv;
}


