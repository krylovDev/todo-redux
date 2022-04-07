import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./todos.const";
import { v4 } from 'uuid'

export const todosReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO: {
			return [
				...state, // Старый массив + новый объект
				{ id: v4(), title: action.title, completed: false }
			];
		}
		
		case TOGGLE_TODO: {
			return state.map((todo) =>
				todo.id === action.id
					? { ...todo, completed: !todo.completed }
					: todo
			);
		}
		
		case REMOVE_TODO: {
			return state.filter(({ id }) => id !== action.id);
		}
		
		default: {
			return state;
		}
	}
};
