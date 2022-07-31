const router = require("express").Router();
const {
	authGetController,
	authSignInPostController,
	authSignOutPostController,
	authSignUpPostController,
} = require("../controllers/auth.controller");

router.get("/", authGetController);
router.post("/signup", authSignUpPostController);
router.post("/signin", authSignInPostController);
router.get("/signout", authSignOutPostController);

module.exports = router;
