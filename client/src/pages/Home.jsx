import React, { useContext } from "react";
import { DefaultContext } from "../contexts/DefaultContext";
import styles from "../components/home/home.module.css";
import Header from "../components/home/Header";
import EnjoyTv from "../components/home/EnjoyTv";
import ImageInfo from "../components/home/ImageInfo";
import WatchEveryWhere from "../components/home/WatchEveryWhere";
import FaqSection from "../components/home/FaqSection";
import Footer from "../components/home/Footer";

const Home = () => {
	const { assets, isSignedIn, plan } = useContext(DefaultContext);
	return (
		<div className={styles.headerSection}>
			<Header assets={assets} isSignedIn={isSignedIn} plan={plan} />
			<EnjoyTv assets={assets} />
			<ImageInfo image={assets?.images?.downloadMovies}>
				<h1>Download to watch offline.</h1>
				<h2>Save your favorites easily and always have something to watch.</h2>
			</ImageInfo>
			<WatchEveryWhere />
			<ImageInfo image={assets?.images?.kidsProfile} width="100%">
				<h1>Profiles for kids.</h1>
				<h2>
					Send kids on adventures with their favorite characters in a space made just for
					them—free with your membership.
				</h2>
			</ImageInfo>
			<FaqSection />
			<Footer backgroundColor="#000" />
		</div>
	);
};

export default Home;
