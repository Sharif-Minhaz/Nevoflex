import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get(url).then((data) => setData(data));
	}, [url]);

	return [data];
};
