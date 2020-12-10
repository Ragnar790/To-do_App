import React from "react";

const Todo = ({ setTodos, text, todo, todos }) => {
	const deleteHandler = (event) => {
		// e is the event (todo) that is being clicked
		//will remove the one with same id and only keep the ones that are diff
		// In other words, filters the events with diff id and discards the one with same id (the one that's clicked)

		// console.log("Deleted->" + event.target.className);
		// event.target.className = `${event.target.className} fall`;
		// console.log("new Class->" + event.target.className);
		setTodos(todos.filter((e) => e.id !== todo.id));
	};
	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						done: !item.done,
					};
				} else {
					return item;
				}
			})
		);
	};
	return (
		<div className="todo">
			<li className={`todo-item ${todo.done === true ? "completed" : ""}`}>
				{text}
			</li>
			<button className="complete-btn">
				<i onClick={completeHandler} className="fas fa-check-square"></i>
			</button>
			<button onClick={deleteHandler} className="trash-btn">
				<i className="fas fa-trash-alt"></i>
			</button>
		</div>
	);
};
export default Todo;
