import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signin.module.css";

const RedBtnLg = (props) => {
	const navigate = useNavigate();

	if (props.navigate) {
		return (
			<button onClick={() => navigate(props.navigate)} className={styles.redBtnLg}>
				{props.children}
			</button>
		);
	} else {
		return <button className={styles.redBtnLg}>{props.children}</button>;
	}
};

export default RedBtnLg;
