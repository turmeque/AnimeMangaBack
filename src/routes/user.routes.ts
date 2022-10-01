import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
} from "../controller/controllerUsers";
const server = Router();

server.post("/", async (req, res) => {
  const { username, email, password, cellphone } = req.body;
  try {
    const newUser = await createUser({ username, email, password, cellphone });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong", error });
  }
});

server.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong", error });
  }
});

server.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: "Something went  wrong" });
  }
});

export default server;
