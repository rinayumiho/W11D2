export const allToDos = (state) =>{
  const toDosArr = Object.values(state.todos);
  return toDosArr;
  //return array so easy to use for lists
};

// export const getAllTodos = ({ state }) => (
// 	Object.keys(state.todos).map(id => state.todos[id])
// );