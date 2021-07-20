import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import ToDo from "../components/ToDo";
/*
  react-redux의 connect()를 통해서 toDos(state)와 addToDo(dispatch)를 props로 전달받음
*/
function Home({ toDos, addToDo }) {
  const [toDoText, setToDoText] = useState("");
  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setToDoText(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setToDoText("");
    addToDo(toDoText);
  };

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={toDoText} onChange={handleChange} />
        <input type="submit" value="add" />
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

//mapStateToProps (store의 state를 props로) -> 컴포넌트에서 state를 사용할 수 있다.
// 파라미터 : react-redux store의 state, 컴포넌트에 전달되는 Props(여기선 생략)
// return {something: "hello"}; -> Home의 props에 추가된다.
// 따라서 return { state } -> Home의 props에 state가 전달되어 사용 가능
const mapStateToProps = (state, ownProps) => {
  return { toDos: state }; //Home은 store를 사용할 수 있게 됨
};

//mapDispatchToProps (store.dispatch를 props로) -> 컴포넌트에서 dispatch를 사용할 수 있다.
// 각기 다른 action을 처리하는 dispatch들을 만들어 전해줄 수 있다.
// -> 컴포넌트에서 직접 action을 생성하고 dispatch 하지 않아도 되게 된다.
const mapDispatchToProps = (dispatch, ownProps) => {
  return { addToDo: (text) => dispatch(actionCreator.addToDo(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
