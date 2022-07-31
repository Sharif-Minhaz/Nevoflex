import React, { useState, useReducer } from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Routers from "../routes/Routers";
import axios from "axios";
import { DefaultContext } from "../contexts/DefaultContext";
import { mailReducer } from "../reducer/mailReducer";

const initialState = {
	primaryMail: "",
	mail: "",
	password: "",
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

	const handleMailSubmit = (e) => {
		e.preventDefault();
		if (mailInfo.mail.length >= 5) {
			dispatch({ type: "SUBMIT" });
			navigate("/signin1");
		} else {
			e.preventDefault();
		}
	};

	const handlePassword = (e) => {
		dispatch({ type: "JOINPASSWORD", payload: e.target.value });
	};

	const handleSignupSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8080/auth/signup", {
				email: mailInfo.mail,
				password: mailInfo.password,
			})
			.then((response) => {
				setIsSignedIn(response.data.isSignedIn);
				dispatch({ type: "ATTACHMAIL", payload: response.data.signedInMail });
				navigate("/signin3");
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<DefaultContext.Provider
			value={{
				assets,
				isSignedIn,
				plan,
				mail: mailInfo.mail,
				handleMailSubmit,
				handleMailInput,
				password: mailInfo.password,
				handlePassword,
				handleSignupSubmit,
			}}
		>
			<Routers condition={mailInfo.mail} />
		</DefaultContext.Provider>
	);
};

export default Base;
