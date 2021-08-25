import React from "react";

// export default () => <div>Todo List goes here!</div>

export const TodoList = (props) => {
    const todo = props.todos.map((todo) => {
        return <li key={todo.id}>
                    title: {todo.title}
                    <br />
                    body: {todo.body}
                </li>

    });

    return (
        <div>
          <h1>All Todos</h1>
          <ul>{TodoList}</ul>
        </div>
    );
    
} 
