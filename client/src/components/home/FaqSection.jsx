import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import SignInInput from "./SignInInput";
import Accordion from "./accordion/Accordion";
import { faqs } from "../../data/faq.data";

const FaqSection = () => {
	const [data, setData] = useState([]);
	const [clicked, setClicked] = useState("");

	const handleClick = (id) => {
		clicked === id ? setClicked("") : setClicked(id);
	};

	useEffect(() => {
		setData(faqs);
	}, []);

	return (
		<div className={styles.faqSection}>
			<div className={styles.wrapper}>
				<h1>Frequently Asked Questions</h1>
				<Accordion data={data} handleClick={handleClick} clicked={clicked} />
			</div>
			<SignInInput />
		</div>
	);
};

export default FaqSection;
