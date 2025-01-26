import { getLocalStorage } from './handleLocalStorage.js';
import { createToDoItem } from './createTodoItem.js';

export const createTodoList = () => {
  const todosFromLocalHost = getLocalStorage('todos');

  todosFromLocalHost.forEach((todo) => {
    createToDoItem(todo);
  });
};
