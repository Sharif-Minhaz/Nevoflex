import React, { useState, useReducer } from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Routers from "../routes/Routers";
import { DefaultContext } from "../contexts/DefaultContext";
import { mailReducer } from "../reducer/mailReducer";

const initialState = {
	primaryEmail: "",
	mail: "",
};

const Base = () => {
	// Main task will be convert the states into reducers later...
	const [assets] = useFetch("http://localhost:8080/assets");
	const [data, setData] = useState({});
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [plan, setPlan] = useState(false);
	// mail related reducer
	const [mailInfo, dispatch] = useReducer(mailReducer, initialState);
	const navigate = useNavigate();

	const handleMailInput = (e) => {
		dispatch({ type: "JOIN", payload: e.target.value });
	};

	const handlePrimaryEmailSubmit = (e) => {
		e.preventDefault();
		if (mailInfo.mail.length >= 5) {
			dispatch({ type: "SUBMIT", payload: mailInfo.mail });
			navigate("/signin1");
		} else {
			e.preventDefault();
		}
	};

	return (
		<DefaultContext.Provider
			value={{
				assets,
				isSignedIn,
				plan,
				primaryEmail: mailInfo.primaryEmail,
				mail: mailInfo.mail,
				handlePrimaryEmailSubmit,
				handleMailInput,
			}}
		>
			<Routers />
		</DefaultContext.Provider>
	);
};

export default Base;
