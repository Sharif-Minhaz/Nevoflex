import React from "react";
import styles from "./home.module.css";
import SignInInput from "./SignInInput";

const Header = ({ assets, isSignedIn, plan }) => {
	return (
		<div
			className={styles.header}
			style={{ backgroundImage: `url(${assets?.images?.mainBg})` }}
		>
			<div className={styles.wrapper}>
				<nav className={styles.nav}>
					<img src="/assets/logos/brand.png" alt="brand" />
					{isSignedIn ? (
						<button className={styles.signBtn}>Sign Out</button>
					) : (
						<button className={styles.signBtn}>Sign In</button>
					)}
				</nav>
				<div className={styles.introSection}>
					<div className={styles.introWrapper}>
						<h1>Unlimited movies, TV shows, and more.</h1>
						<h2>Watch anywhere. Cancel anytime.</h2>

						{plan && isSignedIn && (
							<button className={styles.redBtn}>Check out {">"}</button>
						)}
						{!plan && isSignedIn && (
							<button className={styles.redBtn}>Setup plan {">"}</button>
						)}
						{!plan && !isSignedIn && <SignInInput />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
