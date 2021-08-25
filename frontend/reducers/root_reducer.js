import { combineReducers } from "redux";
import todosReducer from "./todos_reducer";
import stepsReducer from "./step_reducer";
// import { allToDos } from "./selectors";

const rootReducer = combineReducers({
    todos: todosReducer,
    steps: stepsReducer,
    
})

export default rootReducer;