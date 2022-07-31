import React, { useContext } from "react";
import NavWhite from "../components/signin/NavWhite";
import Step1Body from "../components/signin/signin-step-1/Step1Body";
import styles from "../components/signin/signin.module.css";
import FooterWhite from "../components/signin/FooterWhite";
import { DefaultContext } from "../contexts/DefaultContext";

const SigninStep1 = () => {
	const { assets, isSignedIn } = useContext(DefaultContext);

	return (
		<div className={styles.signin1Section}>
			<NavWhite isSignedIn={isSignedIn} />
			<Step1Body assets={assets} />
			<FooterWhite />
		</div>
	);
};

export default SigninStep1;
