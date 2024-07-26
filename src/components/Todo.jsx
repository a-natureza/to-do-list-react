import React from "react";

const Todo = ({ todo, completeTodo, removeTodo, startEditTodo }) => {
	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
		>
			<div className="content">
				<p>{todo.text}</p>
				<p className="category">({todo.category})</p>
			</div>
			<div>
				<button
					type="button"
					className="complete"
					onClick={() => completeTodo(todo.id)}
				>
					Feito
				</button>
				<button type="button" onClick={() => startEditTodo(todo)}>
					Editar
				</button>
				<button
					type="button"
					className="remove"
					onClick={() => removeTodo(todo.id)}
				>
					X
				</button>
			</div>
		</div>
	);
};

export default Todo;

// rafce => cria todo componente da função => ES7 React/Redux/React-Native/JS snippets
