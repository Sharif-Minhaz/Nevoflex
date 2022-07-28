import React from "react";
import AccordionItem from "./AccordionItem";
import styles from "../home.module.css";

const Accordion = ({ data, clicked, handleClick }) => {
	return (
		<div className={styles.accordion}>
			{data.map((faq) => (
				<AccordionItem
					key={faq.id}
					id={faq.id}
                    clicked={clicked}
					handleClick={handleClick}
					question={faq.question}
					answer={faq.answer}
				/>
			))}
		</div>
	);
};

export default Accordion;
