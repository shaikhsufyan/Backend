const express = require("express");
const { signupUser, loginUser } = require("../userController");
const { signupValidator } = require("../validation/validate");
const routes = express.Router();
const app =express();
app.use(express( ))

routes.post("/signup",signupValidator, signupUser)
routes.post("/login", loginUser)

module.exports=routes;