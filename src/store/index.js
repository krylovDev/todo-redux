import { createStore } from "redux";
import { rootReducer } from "./root.reducer";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

export const configureStore = () => {
	const persistedState = loadState()
	const store = createStore(rootReducer, persistedState)
	store.subscribe(throttle(() => {
		saveState({
			todosReducer: store.getState().todosReducer
		})
	}, 1000)) // Ограничиваем кол-во запросов за 1 секунду
	return store
}
