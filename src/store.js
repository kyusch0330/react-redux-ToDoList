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

export const actionCreator = { addToDo, deleteToDo };

const reducer = (toDos = [], action) => {
  console.log(toDos, action);
  switch (action.type) {
    case ADD:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...toDos];
    case DELETE:
      return toDos.filter((toDo) => toDo.id !== action.targetId);
    default:
      return toDos;
  }
};

const store = createStore(reducer);

export default store;
