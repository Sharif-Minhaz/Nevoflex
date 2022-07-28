import React from "react";
import shortid from "shortid";
import styles from "../home.module.css";

const AccordionItem = ({ question, clicked, answer, id, handleClick }) => {
	const showAnswer = () => {
		return clicked === id ? true : false;
	};

	return (
		<div className={styles.accordionItem}>
			<div onClick={() => handleClick(id)} className={styles.accordionHeading}>
				<h2>{question}</h2>
				{/* <b> {showAnswer() ? "-" : "+"}</b> */}
				<div className={`${styles.plus} ${showAnswer() && styles.plusX}`}>
					<span></span>
					<span></span>
				</div>
			</div>
			{showAnswer() && (
				<div className={styles.accordionBody}>
					{answer.map((ans) => (
						<p key={shortid.generate()}>{ans}</p>
					))}
				</div>
			)}
		</div>
	);
};

export default AccordionItem;
