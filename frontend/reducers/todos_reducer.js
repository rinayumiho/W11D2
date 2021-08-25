import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};


const todosReducer = (state = initialState, action ) => {
  //debugger
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type){
    case RECEIVE_TODOS:
      // Object.assign(nextstate, action);
      action.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;

    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;

    case REMOVE_TODO:
      delete nextState[action.todo.id];
      return nextState;

    default: 
      return state;
  }
};


export default todosReducer