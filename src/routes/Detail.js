import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";

// react-router의 Link를 통해 렌더링되는 컴포넌트

//mapStateToProps를 통해 전달된 toDo
function Detail({ toDo, deleteToDo }) {
  return (
    <>
      <h1>Detail {toDo?.text}</h1>
      <h5>Created at: {new Date(toDo?.id).toString()}</h5>
      <button onClick={deleteToDo}> Delete </button>
    </>
  ); //toDo? -> 해당 id의 toDo 없을 시 대비(optional chaining)
}

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id }, //url의 :id에 해당하는 부분, 따라서 항상 문자열이다.
    },
  } = ownProps;

  return {
    //props로 전달되는 match.params.id에 해당하는 toDo를 전체 toDos에서 찾아서 반환
    toDo: state.find((toDo) => {
      return toDo.id === parseInt(id);
    }),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { id }, //url의 :id에 해당하는 부분, 따라서 항상 문자열이다.
    },
  } = ownProps;

  return {
    deleteToDo: () => {
      dispatch(remove(parseInt(id)));
      ownProps.history.push("/");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
