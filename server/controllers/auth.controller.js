const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");

exports.authGetController = (req, res, next) => {
	res.json("hello");
};

exports.authSignUpPostController = async (req, res, next) => {
	console.log("hello");
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (user) {
			return res.json("Email already in use.");
		}
		const saltRound = 10;
		const hashedPassword = await bcrypt.hash(password, saltRound);
		const newUser = new User({
			email,
			password: hashedPassword,
		});
		await newUser.save();
		const token = jwt.sign(
			{ user: { email: newUser.email } },
			process.env.JWT_SECRET,
			{ expiresIn: "1h" } // 1 hour
		);
		res.cookie("auth", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour
		res.json({
			isSignedIn: true,
			signedInMail: email,
		});
	} catch (err) {
		next(err);
	}
};

exports.authSignInPostController = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const authenticated = verifyUser(req, res, next);
		if (authenticated) {
			return res.redirect("/dashboard");
		} // forbid the client to access this route when logged in.

		const user = await User.findOne({ email });
		if (user) {
			const isMatched = await bcrypt.compare(password, user.password);
			if (isMatched) {
				const token = jwt.sign(
					{ user: { name: user.name, email: user.email } },
					process.env.JWT_SECRET,
					{ expiresIn: "1h" } // 1 hour
				);
				res.cookie("auth", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour
				return res.redirect("/dashboard");
			}
			return res.status(404).json({ message: "Invalid username or password" });
		}

		res.status(404).json({ message: "Invalid username or password" });
	} catch (err) {
		next(err);
	}
};

exports.authSignOutPostController = (req, res, next) => {
	res.json("hello");
};
