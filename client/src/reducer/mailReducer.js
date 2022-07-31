export const mailReducer = (state, action) => {
	switch (action.type) {
		case "JOIN":
			return { ...state, mail: action.payload };
		case "SUBMIT":
			return state;
		case "JOINPASSWORD":
			return { ...state, password: action.payload };
		case "SIGNIN":
			return { ...state };
		case "GETMAIL":
			return { ...state, primaryMail: action.payload };
	}
	return state;
};

// todo: need to protect the /signin1 route. If mail is removed then the user can't move to that page with event browser history
