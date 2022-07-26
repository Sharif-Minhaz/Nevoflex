import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios
			.get(url)
			.then((response) => setData(response.data))
			.catch((err) => {
				console.error(err);
			});
	}, [url]);

	return [data];
};
