import React from "react";

const form = ({ inputText, setInputText, todos, setTodos, setFilter }) => {
	const inputTextHandler = (e) => {
		// console.log(e.target.value);
		setInputText(e.target.value);
	};
	const submitButtonHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, done: false, id: Math.random() * 1000 },
		]);
		setInputText("");
	};
	const filterStatusHandler = (e) => {
		setFilter(e.target.value);
	};
	return (
		<form>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type="text"
				className="todo-list"
			/>
			<button onClick={submitButtonHandler} className="todo-button">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select
					onClick={filterStatusHandler}
					name="todos"
					className="filter-todo"
				>
					<option value="All">All</option>
					<option value="Done">Done</option>
					<option value="Undone">Undone</option>
				</select>
			</div>
		</form>
	);
};
export default form;
