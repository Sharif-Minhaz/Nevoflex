import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ condition, children }) => {
	if (!condition && condition.length <= 0) {
		return <Navigate to="/" replace />;
	}
	return children;
};

export default Protected;
