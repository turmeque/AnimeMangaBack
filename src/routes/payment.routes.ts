import { Router } from "express";
import db from "../../models";
const server = Router();
const Stripe = require("stripe");
const stripe = new Stripe(process.env.SECRET_CODE);

server.post("/", async (req, res) => {
  const { id, totalPrice } = req.body;

  const amount = Number(totalPrice);

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Animercce",
      payment_method: id,
      confirm: true,
    });

    res.status(200).json({ message: "Successfull payment" });
  } catch (error: any) {
    
    res.status(400).json(error.raw.message);
  }
});

export default server;
