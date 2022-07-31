import React from "react";
import styles from "./signin.module.css";

const RedBtnLg = (props) => {
	return <button className={styles.redBtnLg}>{props.children}</button>;
};

export default RedBtnLg;
