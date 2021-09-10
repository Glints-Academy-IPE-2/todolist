var express = require("express");
var router = express.Router();
// const { validateUser } = require("../validator/userValidator");

const UserController = require("../controller/userController");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/show", UserController.getData);
router.get("/show/:UserId", UserController.getDataById);
router.delete("/delete/:UserId", UserController.deleteDataById);
router.put("/edit/:UserId", UserController.updateDataById);

module.exports = router;
