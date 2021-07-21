import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

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

// state : store의 state , ownProps : 원래 전달될 props들
const mapStateToProps = (state, ownProps) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { addToDo: (text) => dispatch(add(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
