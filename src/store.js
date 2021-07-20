import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteToDo = (targetId) => {
  return {
    type: DELETE,
    targetId,
  };
};

const reducer = (toDos = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...toDos];
    case DELETE:
      return toDos.filter((toDo) => toDo.id !== action.targetId);
    default:
      return toDos;
  }
};

const store = createStore(reducer);

export default store;
