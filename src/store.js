import { configureStore, createSlice } from "@reduxjs/toolkit";

/* createSlice는 reducer와 action들을 한번에 생성해준다. */
// createReducer, createAction 필요 없어짐
const toDos = createSlice({
  name: "toDosReducer",
  initialState: JSON.parse(localStorage.getItem("TODOS")),
  reducers: {
    add: (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
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

// createSlice로 생성된 toDos에서 actions를 전달
export const { add, remove } = toDos.actions;

export default store;

/*
  1. react-redux
  -toolkit-
  2. createAction, createReducer
  3. createSlice
*/
