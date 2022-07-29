import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Base from "../components/Base";

const App = () => {
	return (
		<BrowserRouter>
			<Base />
		</BrowserRouter>
	);
};

export default App;
