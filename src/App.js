import "./App.css";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";
import Filters from "./components/Filters";

export default function App() {
	return (
		<div className="App">
			<h1>Todo Redux App</h1>
			<AddTodoForm/>
			<Filters/>
			<TodoList/>
		</div>
	);
}
