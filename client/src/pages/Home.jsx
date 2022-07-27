import React, { useContext } from "react";
import { DefaultContext } from "../contexts/DefaultContext";
import styles from "../components/home/home.module.css";
import Header from "../components/home/Header";
import EnjoyTv from "../components/home/EnjoyTv";
import DownloadShow from "../components/home/DownloadShow";

const Home = () => {
	const { assets, isSignedIn, plan } = useContext(DefaultContext);
	return (
		<div className={styles.headerSection}>
			<Header assets={assets} isSignedIn={isSignedIn} plan={plan} />
			<EnjoyTv assets={assets} />
			<DownloadShow assets={assets} />
		</div>
	);
};

export default Home;
