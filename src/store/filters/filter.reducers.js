import { SET_FILTER } from "./filter.const";

export const filtersReducer = (state = "all", action) => {
	switch (action.type) {
		case SET_FILTER : {
			return action.filter;
		}
		default: {
			return state
		}
	}
}
