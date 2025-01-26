export const addToLocalStorage = (key, value) => {
  const data = getLocalStorage(key);
  let newData;

  if (Array.isArray(data)) {
    newData = [...data, value];
  } else {
    newData = [value];
  }

  localStorage.setItem(key, JSON.stringify(newData));
};

export const saveLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const deleteLocalStorage = (key, id) => {
  const oldValue = getLocalStorage(key);

  const newValue = oldValue.filter((item) => item.id !== +id);

  saveLocalStorage(key, newValue);
};

export const updateLocalStorage = (key, id, value) => {
  const oldValue = getLocalStorage(key);

  const newValue = oldValue.map((item) => {
    if (item.id === +id) {
      return {...item, ...value};
    }

    return item;
  });

  saveLocalStorage(key, newValue);
};
