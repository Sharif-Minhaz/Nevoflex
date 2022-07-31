import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SigninStep1 from "../pages/SigninStep1";
import SigninStep2 from "../pages/SigninStep2";
import SigninStep3 from "../pages/SigninStep3";
import Protected from "../routes/Protected";

const Routers = ({ condition }) => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route
				path="/signin1"
				element={
					// <Protected condition={condition}>
					<SigninStep1 />
					// </Protected>
				}
			/>
			<Route
				path="/signin2"
				element={
					// <Protected condition={condition}>
					<SigninStep2 />
					// </Protected>
				}
			/>
			<Route
				path="/signin3"
				element={
					// <Protected condition={condition}>
					<SigninStep3 />
					// </Protected>
				}
			/>
		</Routes>
	);
};

export default Routers;
