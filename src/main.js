import { todoLocalStorage } from '../constants.js';
import { createToDoItem } from '../scripts/createTodoItem.js';
import { createTodoList } from '../scripts/createTodoList.js';
import { getLocalStorage } from '../scripts/handleLocalStorage.js';

const todoInput = document.getElementById('input-box');
const addBtn = document.getElementById('add-button');

const todoListValues = getLocalStorage(todoLocalStorage);

if (todoListValues && todoListValues.length > 0) {
  createTodoList();
}

addBtn.addEventListener('click', function () {
  createToDoItem(todoInput.value);

  todoInput.value = '';
});
