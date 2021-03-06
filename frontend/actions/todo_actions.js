// error handling is better
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => { // todos will be passed in as an array
	//debugger
	return {
		type: RECEIVE_TODOS,
		todos
		//todos: todos
	}
}

export const receiveTodo = (todo) => {
	return {
		type: RECEIVE_TODO,
		todo
		//todo: todo
	}
}

export const removeTodo = (todo) => {
	return {
		type: REMOVE_TODO,
		todo
		//todo: todo
	}
}