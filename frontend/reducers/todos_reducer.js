import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";



const todos_reducer = (state = {}, action ) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type){

    // case RECEIVE_TODOS:
    //   Object.assign(nextstate, action);
    //   return nextState;

    // case RECEIVE_TODO:
    //   nextState[action.todo.id] = action.todo;
    //   return nextState;
    
    default: 
      return state;
  }
};


export default todos_reducer