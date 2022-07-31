import React from "react";
import styles from "./signin.module.css";

const FooterWhite = () => {
	return (
		<footer className={styles.footerWhite}>
			<h2>
				<a href="#">Questions? Contact us.</a>
			</h2>
			<div className={styles.footerSection}>
				<div>
					<a href="#">FAQ</a>
					<a href="#">Cookies Preference</a>
				</div>
				<div>
					<a href="#">Help Center</a>
					<a href="#">Corporate Information</a>
				</div>
				<div>
					<a href="#">Terms of Use</a>
				</div>
				<div>
					<a href="#">Privacy</a>
				</div>
			</div>
		</footer>
	);
};

export default FooterWhite;
