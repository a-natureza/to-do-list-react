import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "Estudar programação",
			category: "Estudo",
			isCompleted: false,
		},
		{ id: 2, text: "Ler livros", category: "Lazer", isCompleted: false },
		{
			id: 3,
			text: "Exercícios físicos",
			category: "Saúde",
			isCompleted: false,
		},
	]);

	const addTodo = (text, category) => {
		const newTodos = [
			...todos,
			{
				id: Math.floor(Math.random() * 10000),
				text,
				category,
				isCompleted: false,
			},
		];
		setTodos(newTodos);
	};

	const completeTodo = (id) => {
		const newTodos = todos.map((todo) =>
			todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
		);
		setTodos(newTodos);
	};

	const removeTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	return (
		<>
			<div className="app">
				<h1>Lista de Tarefas</h1>
				<div className="todo-list">
					{todos.map((todo) => (
						<Todo
							key={todo.id}
							todo={todo}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
						/>
					))}
				</div>
				<TodoForm addTodo={addTodo} />
			</div>
		</>
	);
}

export default App;
