// error handling is better
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = (todos) => { // todos will be passed in as an array
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


// {
//   1: {
//     id: 1,
//     title: 'wash car',
//     body: 'with soap',
//     done: false
//   },
//   2: {
//     id: 2,
//     title: 'wash dog',
//     body: 'with shampoo',
//     done: true
//   },
// }