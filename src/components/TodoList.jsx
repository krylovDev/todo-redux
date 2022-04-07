import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { v4 } from 'uuid'
import { selectVisibleTodos } from "../store/todos/todos.selectors";
import { useParams } from "react-router-dom";

export const TodoList = () => {
	const { filter } = useParams()
	const todos = useSelector((store) =>
		selectVisibleTodos(store, filter));
	return (
		<ul>
			{ todos.map(({ ...props }) => (
				<TodoItem
					key={ v4() }
					{ ...props }
				/>
			)) }
		</ul>
	);
};
