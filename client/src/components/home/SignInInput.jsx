import React, { useContext } from "react";
import styles from "./home.module.css";
import { DefaultContext } from "../../contexts/DefaultContext";

const SignInInput = () => {
	const { mail, handleMailSubmit, handleMailInput } = useContext(DefaultContext);

	return (
		<form className={styles.signupForm} onSubmit={handleMailSubmit}>
			<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
			<div className={styles.inputArea}>
				<input
					value={mail}
					onChange={handleMailInput}
					required
					type="email"
					placeholder="Enter email address"
				/>
				<button className={`${styles.redBtn} ${styles.edgedBorder}`} type="submit">
					Get Started {">"}
				</button>
			</div>
		</form>
	);
};

export default SignInInput;
