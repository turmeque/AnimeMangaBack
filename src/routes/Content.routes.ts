import { Router } from "express";
import db from "../../models";
import {
  getContentUser,
  purshasedContent,
} from "../controller/controllerContent";
const server = Router();

server.post("/", (req, res) => {
  try {
    const resp = purshasedContent(req.body);
    res.status(200).json(resp);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong", error });
  }
});

server.get("/", async (req, res) => {
  const { id } = req.body;
  try {
    const resp = await getContentUser(id);
    res.status(200).json(resp);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong", error });
  }
});

export default server;
