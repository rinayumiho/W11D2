import { connect } from "react-redux";
import { receiveTodo } from "../../actions/todo_actions";
import { allToDos } from "../../reducers/selectors";
import ToDoList from "./todo_list";
import React from "react";

const mSTP = state => ({
  //debugger
  todos: allToDos(state)
});

const mDTP = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(mSTP, mDTP)(ToDoList);

