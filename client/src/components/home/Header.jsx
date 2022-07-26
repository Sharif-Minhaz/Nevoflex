import React, { useContext } from "react";
import { DefaultContext } from "../../contexts/DefaultContext";
import styles from "./home.module.css";

const Header = () => {
	const { assets, isSignedIn } = useContext(DefaultContext);
	return (
		<div className={styles.header} style={{ backgroundImage: `url(${assets?.images?.[1]})` }}>
			<div className={styles.wrapper}>
				<nav className={styles.nav}>
					<img src="/assets/logos/brand.png" alt="brand" />
					{isSignedIn === false ? (
						<button className={styles.signBtn}>Sign In</button>
					) : (
						<button className={styles.signBtn}>Sign Out</button>
					)}
				</nav>
			</div>
		</div>
	);
};

export default Header;
