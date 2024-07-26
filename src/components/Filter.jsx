const Filter = ({ filter, setFilter, setSort, category, setCategory }) => {
	return (
		<div className="filter">
			<h2>Filtrar:</h2>
			<div className="filter-options">
				<div>
					<p>Status:</p>
					<select value={filter} onChange={(e) => setFilter(e.target.value)}>
						<option value="all">Todas</option>
						<option value="completed">Concluídas</option>
						<option value="pending">Pendentes</option>
					</select>
				</div>
				<div>
					<p>Categoria:</p>
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="All">Todas</option>
						<option value="Estudo">Estudo</option>
						<option value="Lazer">Lazer</option>
						<option value="Saúde">Saúde</option>
						<option value="Trabalho">Trabalho</option>
					</select>
				</div>
				<div>
					<p>Ordem alfabética:</p>
					<button type="button" onClick={() => setSort("Asc")}>
						A-Z
					</button>
					<button type="button" onClick={() => setSort("Desc")}>
						Z-A
					</button>
				</div>
			</div>
		</div>
	);
};

export default Filter;
