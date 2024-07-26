import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Search from "./components/Search";
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
		{
			id: 4,
			text: "Fazer programa",
			category: "Trabalho",
			isCompleted: false,
		},
	]);

	const [search, setSearch] = useState("");

	const [filter, setFilter] = useState("All");

	const [sort, setSort] = useState("Asc");

	const [editTodo, setEditTodo] = useState(null);

	const [editTodoText, setEditTodoText] = useState("");
	// Load to do no local storage
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem("todos"));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);

	// Save to do no local storage
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const addTodo = (text, category) => {
		if (!category) {
			alert("Por favor, selecione uma categoria");
			return;
		}
		if (!text) {
			alert("Por favor, digite uma tarefa");
			return;
		}
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

	const startEdit = (todo) => {
		setEditTodo(todo);
		setEditTodoText(todo.text);
	};

	const saveEditTodo = () => {
		const newTodos = todos.map((todo) =>
			todo.id === editTodo.id ? { ...todo, text: editTodoText } : todo,
		);
		setTodos(newTodos);
		setEditTodo(null);
		setEditTodoText("");
	};

	return (
		<>
			<div className="app">
				<h1>Lista de Tarefas</h1>
				<TodoForm addTodo={addTodo} />
				{editTodo && (
					<div className="edit-todo">
						<h2>Editar tarefa:</h2>
						<input
							type="text"
							value={editTodoText}
							onChange={(e) => setEditTodoText(e.target.value)}
						/>
						<button type="button" onClick={saveEditTodo}>
							Salvar
						</button>
						<button type="button" onClick={() => setEditTodo(null)}>
							Cancelar
						</button>
					</div>
				)}
				<Search search={search} setSearch={setSearch} />
				<Filter
					filter={filter}
					setFilter={setFilter}
					sort={sort}
					setSort={setSort}
				/>
				<div className="todo-list">
					{todos
						.filter((todo) =>
							filter === "All"
								? true
								: filter === "completed"
									? todo.isCompleted
									: !todo.isCompleted,
						)
						.filter((todo) =>
							todo.text.toLowerCase().includes(search.toLowerCase()),
						)
						.sort((a, b) =>
							sort === "Asc"
								? a.text.localeCompare(b.text)
								: b.text.localeCompare(a.text),
						)
						.map((todo) => (
							<Todo
								key={todo.id}
								todo={todo}
								completeTodo={completeTodo}
								removeTodo={removeTodo}
								startEditTodo={startEdit}
							/>
						))}
				</div>
			</div>
		</>
	);
}

export default App;
