import React, { useContext } from "react";
import FooterWhite from "../components/signin/FooterWhite";
import NavWhite from "../components/signin/NavWhite";
import Step3Body from "../components/signin/signin-step-3/Step3Body";
import { DefaultContext } from "../contexts/DefaultContext";

const SigninStep3 = () => {
	const { isSignedIn } = useContext(DefaultContext);
	return (
		<div>
			<NavWhite isSignedIn={isSignedIn} />
			<Step3Body />
			<FooterWhite />
		</div>
	);
};

export default SigninStep3;
