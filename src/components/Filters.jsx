import React from 'react';
import { ACTIVE_TODOS, ALL_TODOS, COMPLETED_TODOS } from "../store/todos/todos.const";
import { ACTIVE_COLOR, DEFAULT_COLOR } from "../store/filters/filter.const";
import { Link, useParams } from "react-router-dom";

const Filters = () => {
	const { filter: activeFilter = ALL_TODOS } = useParams()
	return (
		<div style={ { display: "flex", justifyContent: "center", gap: "0.75rem" } }>
			<Link
				to={ `/${ ALL_TODOS }` }
				style={ { color: activeFilter === ALL_TODOS ? ACTIVE_COLOR : DEFAULT_COLOR } }
			>all
			</Link>
			
			<Link
				to={ `/${ ACTIVE_TODOS }` }
				style={ { color: activeFilter === ACTIVE_TODOS ? ACTIVE_COLOR : DEFAULT_COLOR } }
			>active
			</Link>
			
			<Link
				to={ `/${ COMPLETED_TODOS }` }
				style={ { color: activeFilter === COMPLETED_TODOS ? ACTIVE_COLOR : DEFAULT_COLOR } }
			>completed
			</Link>
		</div>
	);
};

export default Filters;
