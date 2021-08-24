import { combineReducers } from "redux";
import todos_reducer from "./todos_reducer";

const rootReducer = combineReducers({
    todos: todos_reducer
})

export default rootReducer;