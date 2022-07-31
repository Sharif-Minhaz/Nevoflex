import React from "react";
import styles from "../signin.module.css";
import RedBtnLg from "../RedBtnLg";

const Step1Body = ({ assets }) => {
	return (
		<section className={styles.step1Body}>
			<div className={styles.contents}>
				<img src={assets?.images?.devices} alt="device-img" />
				<small>STEP 1 OF 3</small>
				<h1>Finish setting up your account</h1>
				<h2>
					Netflix is personalized for you. Create a password to watch on any device at any
					time.
				</h2>
				<RedBtnLg navigate="/signin2">Next</RedBtnLg>
			</div>
		</section>
	);
};

export default Step1Body;
