import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signin.module.css";

const RedBtnLg = (props) => {
	const navigate = useNavigate();
	return (
		<button onClick={() => navigate(props.navigate)} className={styles.redBtnLg}>
			{props.children}
		</button>
	);
};

export default RedBtnLg;
