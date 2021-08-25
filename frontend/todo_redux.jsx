import configureStore from "./store/store";
import { receiveTodos, receiveTodo, removeTodo } from "./actions/todo_actions";
import { receiveSteps, receiveStep, removeStep } from "./actions/step_actions";
import { allToDos } from "./reducers/selectors";
// need to remember to import
import ReactDOM from "react-dom";
import React from "react";
import Root from "./components/root"


document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to the TODOs.");
    const store = configureStore();
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;

    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;

    window.allToDos = allToDos;

    const rootElement = document.getElementById("rootElement");
    ReactDOM.render(<Root store={store}/>, rootElement);

});
  


