import React, { useContext } from "react";
import NavWhite from "../components/signin/NavWhite";
import styles from "../components/signin/signin.module.css";
import Step2Body from "../components/signin/signin-step-2/Step2Body";
import { DefaultContext } from "../contexts/DefaultContext";
import FooterWhite from "../components/signin/FooterWhite";

const SigninStep2 = () => {
	const {
		handleMailInput,
		mail,
		isSignedIn,
		password,
		handlePassword,
		handleSignupSubmit,
	} = useContext(DefaultContext);

	return (
		<div className={styles.signin2Section}>
			<NavWhite isSignedIn={isSignedIn} />
			<Step2Body
				handleMailInput={handleMailInput}
				mail={mail}
				handlePassword={handlePassword}
				password={password}
				handleSignupSubmit={handleSignupSubmit}
			/>
			<FooterWhite />
		</div>
	);
};

export default SigninStep2;
