import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SigninStep1 from "../pages/SigninStep1";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signin1" element={<SigninStep1 />} />
		</Routes>
	);
};

export default Routers;
