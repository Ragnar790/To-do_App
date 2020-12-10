import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("All");
	const [filteredTodos, setFilteredTodos] = useState([]);

	//USEEFFECT
	useEffect(() => {
		filterHandler();
	}, [todos, filter]);

	const filterHandler = () => {
		switch (filter) {
			case "Done":
				setFilteredTodos(todos.filter((todo) => todo.done === true));
				break;
			case "Undone":
				// console.log(todos.filter((todo) => todo.done === true));
				setFilteredTodos(todos.filter((todo) => todo.done === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	return (
		<div className="App">
			<header>
				<h1>TODO LIST</h1>
			</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setFilter={setFilter}
			/>
			<TodoList
				filteredTodos={filteredTodos}
				setTodos={setTodos}
				todos={todos}
			/>
		</div>
	);
}

export default App;
