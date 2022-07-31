import React from "react";
import styles from "./signin.module.css";

const NavWhite = ({ isSignedIn }) => {
	return (
		<nav className={styles.navWhite}>
			<img src="/assets/logos/brand.png" alt="brand" />
			{isSignedIn ? <span>Sign Out</span> : <span>Sign In</span>}
		</nav>
	);
};

export default NavWhite;
