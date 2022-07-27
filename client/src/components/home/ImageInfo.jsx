import React from "react";
import styles from "./home.module.css";

const ImageInfo = (props) => {
	return (
		<div className={styles.downloadSection}>
			<div className={styles.downloadBox}>
				<img
					style={{ width: props?.width }}
					src={props.image}
					alt="download"
				/>
			</div>
			<div className={styles.sideWaysIntro}>{props.children}</div>
		</div>
	);
};

export default ImageInfo;
