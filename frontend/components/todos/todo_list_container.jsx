import { connect } from "react-redux";
import { allToDos } from "../../reducers/selectors";
import ToDoList from "./todo_list";

const mSTP = state => ({
  //debugger
  todos: allToDos(state)
});

