import React from "react";
import styles from "./home.module.css";

const Footer = ({ backgroundColor }) => {
	return (
		<footer className={styles.footerSection} style={{ backgroundColor }}>
			<p className={styles.extraSpacing}>
				<a href="#">Questions? Contact us.</a>
			</p>
			<div className={styles.footerBox}>
				<div className={styles.links}>
					<a href="#">FAQ</a>
					<a href="#">Investor Relations</a>
					<a href="#">Privacy</a>
					<a href="#">Speed Test</a>
				</div>
				<div className={styles.links}>
					<a href="#">Help Center</a>
					<a href="#">Jobs</a>
					<a href="#">Cookie Preferences</a>
					<a href="#">Legal Notices</a>
				</div>
				<div className={styles.links}>
					<a href="#">Account</a>
					<a href="#">Ways to Watch</a>
					<a href="#">Corporate Information</a>
					<a href="#">Only on Nevoflex</a>
				</div>
				<div className={styles.links}>
					<a href="#">Media Center</a>
					<a href="#">Terms of Use</a>
					<a href="#">Contact Us</a>
				</div>
			</div>
			<p className={styles.extraSpacing}>Nevoflex Bangladesh</p>
		</footer>
	);
};

export default Footer;
