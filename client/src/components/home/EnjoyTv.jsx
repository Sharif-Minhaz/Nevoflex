import React from "react";
import styles from "./home.module.css";

const EnjoyTv = ({ assets }) => {
	return (
		<div className={styles.enjoyTvSection}>
			<div className={styles.writtenSection}>
				<h1>Enjoy on your TV.</h1>
				<h2>
					Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players,
					and more.
				</h2>
			</div>
			<div className={styles.tvContainer}>
				<div className={styles.tvBox}>
					<video className={styles.tvVideo} autoPlay loop src={assets?.videos?.[0]}></video>
					<img className={styles.tv} src={assets?.images?.[4]} alt="tv" />
				</div>
			</div>
		</div>
	);
};

export default EnjoyTv;
