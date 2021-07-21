import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function ToDo({ text, id, deleteToDo }) {
  return (
    <li>
      <Link to={`/detail/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>Delete</button>
    </li>
  );
}

//store의 dispatch와 ToDo컴포넌트로 전달되는 props인 ownProps를 인자로
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //Home에서 ToDo 컴포넌트로 전달해준 id를 이용해 삭제 action을 인자로하는 dispatch 함수 작성
    //acionCreator인 deleteToDo에 payload로 id를 전달
    deleteToDo: () => dispatch(remove(ownProps.id)),
  };
};

//delete를 위한 dispatch를 ToDo 컴포넌트의 props로 전해줌
export default connect(null, mapDispatchToProps)(ToDo);
