import React from "react";
import styles from "./home.module.css";

const DownloadShow = ({ assets }) => {
	return (
		<div className={styles.downloadSection}>
			<div className={styles.downloadBox}>
				<img src={assets?.images?.[0]} alt="download" />
			</div>
			<div className={styles.sideWaysIntro}>
				<h1>Download your shows to watch offline.</h1>
				<h2>Save your favorites easily and always have something to watch.</h2>
			</div>
		</div>
	);
};

export default DownloadShow;
