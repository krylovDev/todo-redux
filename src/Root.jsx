import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Root = ({ store }) => (
	<Provider store={ store }>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <App/> }>
					<Route path=":filter" element={ <App/> }/>
				</Route>
			</Routes>
		</BrowserRouter>
	</Provider>
)
