import { Router } from "express";
import db from "../../models";
const auth = require("../../middlewares/auth");
import isAdminRole from "../../middlewares/validateRoles";

const server = Router();

server.post("/", async (req, res) => {
  try {
    await db.Sales.bulkCreate(req.body);
    res.status(200).json({ msg: "Order entered successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Ops... Something went wrong", error });
  }
});

server.post("/winnings", async (req, res) => {
  const { profit } = req.body;
  // console.log({ profit });
  try {
    await db.Winning.create({ profit });
    res.status(200).json({ msg: "price successfully set" });
  } catch (error) {
    res.status(400).json(error);
  }
});

server.get("/", auth, isAdminRole, async (req, res) => {
  try {
    const sales = await db.Sales.findAll();
    res.status(200).json(sales);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong", error });
  }
});

server.get("/winnings", async (req, res) => {
  try {
    const gains = await db.Winning.findAll();
    res.status(200).json(gains.map((d: any) => d.profit));
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong", error });
  }
});

server.get("/:userId", auth, isAdminRole, async (req, res) => {
  const { userId } = req.body;
  try {
    const sales = await db.Sales.findAll({ where: { userId } });
    res.status(200).json(sales);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong", error });
  }
});

export default server;
