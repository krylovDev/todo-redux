import React from 'react';
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todos/todos.actions";

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	
	return (
		<li
			key={ title }
			style={ { listStyle: "none" } }
		>
			<input
				type="checkbox"
				checked={ completed }
				onChange={ () => dispatch(toggleTodo(id)) }
			/>
			{ title }{ " " }
			<button onClick={ () => dispatch(removeTodo(id)) }>X</button>
		</li>
	);
};

export default TodoItem;
