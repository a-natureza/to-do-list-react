import { useState } from "react";

const TodoForm = ({ addTodo }) => {
	const [value, setValue] = useState("");
	const [category, setCategory] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value || !category) return;
		// add to do
		addTodo(value, category);
		// limpar os campos
		setValue("");
		setCategory("");
	};

	return (
		<div className="todo-form">
			<h2>Criar tarefa:</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Digite o título"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<select value={category} onChange={(e) => setCategory(e.target.value)}>
					<option value="">Selecione uma categoria</option>
					<option value="estudo">Estudo</option>
					<option value="lazer">Lazer</option>
					<option value="saude">Saúde</option>
					<option value="trabalho">Trabalho</option>
				</select>
				<button type="submit">Criar tarefa</button>
			</form>
		</div>
	);
};

export default TodoForm;
