//import { createStore } from "redux";
import {
  configureStore,
  //createAction,
  //createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// //ActionCreator for createReducer by redux toolkit
// //ActionCreator를 반환 (타입은 지정되어있고, payload를 인자로 받음)
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// export const actionCreator = { addToDo, deleteToDo };

/* 기존 reducer by react-redux
const reducer = (toDos = [], action) => {
  console.log(action);
  switch (action.type) {
    case addToDo.type:
      const newToDoObj = { text: action.payload, id: Date.now() };
      return [newToDoObj, ...toDos];
    case deleteToDo.type:
      return toDos.filter((toDo) => toDo.id !== action.payload);
    default:
      return toDos;
  }
};
*/

// // createReducer by redux toolkit
// // creatorReducer는 위와 같은 기능을 하지만 switch를 사용할 필요 없음
// // initialState와 switch역할을 대신할 actionMap 객체를 인자로
// const reducer = createReducer([], {
//   // 여기있는 state는 mutate해도 괜찮다!
//   // state 반환은 두가지 방법이 있음
//   // 1. 새로운 state를 반환하거나, 2. state를 mutate하거나
//   // mutate가 가능한 이유? -> Redux toolkit은 Immer 아래서 동작해서
//   // return을 사용한다면 반드시 새로운 state를 반환하고, return하지 않는다면 state를 mutate 하기만 한다.
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() }); //mutate하면 자동으로 새로운 state가 return이 된다.
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload) //직접 새 state 반환

// });

// // configureStore for createReducer
// const store = configureStore({ reducer });

/* createSlice는 reducer와 action들을 한번에 생성해준다. */
// createReducer, createAction 필요 없어짐
const toDos = createSlice({
  name: "toDosReducer",
  initialState: JSON.parse(localStorage.getItem("TODOS")),
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
      localStorage.setItem("TODOS", JSON.stringify(state));
    },
    remove: (state, action) => {
      state = state.filter((toDo) => toDo.id !== action.payload);
      localStorage.setItem("TODOS", JSON.stringify(state));
      return state;
    },
  },
});

// createSlice로 생성된 toDos에서 reducer를 인자로
const store = configureStore({ reducer: toDos.reducer });

// createSlice로 생성된 toDos에서 actions를 인자로
export const { add, remove } = toDos.actions;

export default store;

/*
  1. react-redux
  -toolkit-
  2. createAction, createReducer
  3. createSlice
*/
