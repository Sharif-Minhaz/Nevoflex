import React from "react";
import { Link } from "react-router-dom";
import styles from "./signin.module.css";

const NavWhite = ({ isSignedIn }) => {
	return (
		<nav className={styles.navWhite}>
			<Link to="/">
				<img src="/assets/logos/brand.png" alt="brand" />
			</Link>
			{isSignedIn ? <span>Sign Out</span> : <span>Sign In</span>}
		</nav>
	);
};

export default NavWhite;
