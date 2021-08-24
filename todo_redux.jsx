import configureStore from "./frontend/store/store";
import { receiveTodos, receiveTodo, removeTodo } from "./frontend/actions/todo_actions";
import { receiveSteps, receiveStep, removeStep } from "./frontend/actions/step_actions";

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
  })
  


