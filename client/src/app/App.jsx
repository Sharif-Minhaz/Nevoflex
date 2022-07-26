import "./App.css";
import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { BrowserRouter } from "react-router-dom";
import Routers from "../routes/Routers";
import { DefaultContext } from "../contexts/DefaultContext";

const App = () => {
	// const [signedInInfo] = useFetch("http://localhost:8080");
	const [assets] = useFetch("http://localhost:8080/assets");
	const [data, setData] = useState({});
	const [isSignedIn, setIsSignedIn] = useState(false);

	return (
		<BrowserRouter>
			<DefaultContext.Provider value={{assets, isSignedIn}}>
				<Routers />
			</DefaultContext.Provider>
		</BrowserRouter>
	);
};

export default App;
