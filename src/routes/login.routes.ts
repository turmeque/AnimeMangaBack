import { Router } from "express";
import isAdminRole from "../../middlewares/validateRoles";
const auth = require("../../middlewares/auth");
const  user =require ("../controller/controllerUsers")
import {
  signUp,
  getAllUsers,
  getUserEmail,
  signIn,
  
} from "../controller/controllerUsers";
const server = Router();

server.post("/", async (req, res) => {
  const { username,image, email, pass, cellphone } = req.body;
  try {
    const newUser = await signUp({ username,image, email, pass, cellphone });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong", error });
  }
});

server.post("/auth", async (req, res) => {
  const { email, password } = req.body;
  try {
    const resp = await signIn({ email, password });
    res.status(200).json(resp);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong", error });
  }
});

server.get("/users", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong", error });
  }
});

server.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const user = await getUserEmail(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: "Something went  wrong" });
  }
});

server.put("/:email",
user.putUser)

server.delete("/:email",
user.deleteUser
)

export default server;
