import React from "react";
import styles from "./home.module.css";

const SignInInput = () => {
	return (
		<form className={styles.signupForm}>
			<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
			<div className={styles.inputArea}>
				<input required type="email" placeholder="Enter email address" />
				<button className={`${styles.redBtn} ${styles.edgedBorder}`} type="submit">
					Get Started {">"}
				</button>
			</div>
		</form>
	);
};

export default SignInInput;
