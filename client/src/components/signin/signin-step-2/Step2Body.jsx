import React from "react";
import styles from "../signin.module.css";
import RedBtnLg from "../RedBtnLg";

const Step2Body = ({ handleMailInput, mail, handleSigninSubmit, password, handlePassword }) => {
	return (
		<section className={styles.step2Body}>
			<div className={styles.contents2}>
				<small>STEP 2 OF 3</small>
				<h1>Create a password to start your membership</h1>
				<p>Just a few more steps and you're done!</p>
				<p>We hate paperwork, too.</p>
				<form className={styles.signinForm} onSubmit={handleSigninSubmit}>
					<input
						onChange={handleMailInput}
						value={mail}
						type="email"
						placeholder="Email"
						required
					/>
					<input
						value={password}
						onChange={handlePassword}
						type="password"
						placeholder="Add a password"
						required
					/>
					<div className={styles.forbidCheckbox}>
						<input type="checkbox" name="forbid" id="forbid" />
						<label for="forbid">Please do not email me Netflix special offers.</label>
					</div>
					<RedBtnLg navigate="/signin2">Next</RedBtnLg>
				</form>
			</div>
		</section>
	);
};

export default Step2Body;
