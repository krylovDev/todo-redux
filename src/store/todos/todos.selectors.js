import { ACTIVE_TODOS, ALL_TODOS, COMPLETED_TODOS } from "./todos.const";

export const selectVisibleTodos = ({ todosReducer }, filter) => {
	switch (filter) {
		case ALL_TODOS: {
			return todosReducer
		}
		
		case ACTIVE_TODOS: {
			return todosReducer.filter(({ completed }) => !completed)
		}
		
		case COMPLETED_TODOS: {
			return todosReducer.filter(({ completed }) => completed)
		}
		
		default: {
			return todosReducer
		}
	}
}
