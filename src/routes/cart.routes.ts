import { Router } from "express";
import { postProductInCart } from "../controller/controllerCart";
import db from "../../models";
const { Cart } = db;

const server = Router();

server.post("/", async (req, res) => {
  // const { id, productId, amount, totalPrice, UserId, category } = req.body;
  try {
    await Cart.bulkCreate(req.body);
    res.send("products saved");
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "Something went wrong", error });
  }
});
export default server;

server.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await Cart.findAll({ where: { UserId: userId } });
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
  }
});

server.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Cart.destroy({ where: { id: id } });
    res.send("Product deleted from cart");
  } catch (err) {
    console.error(err);
  }
});
