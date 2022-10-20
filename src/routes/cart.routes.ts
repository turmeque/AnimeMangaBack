import { Router } from "express";
import { postProductInCart } from "../controller/controllerCart";
import db from "../../models";
const { Cart } = db;

const server = Router();

server.post("/", async (req, res) => {
  const { id, productId, amount, totalPrice, UserId, category } = req.body;
  try {
    const response = await postProductInCart({
      id,
      productId,
      amount,
      totalPrice,
      UserId,
      category,
    });
    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

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

export default server;
