import { Router } from "express";
import db from "../../models";
const server = Router();
const Stripe = require("stripe");
const stripe = new Stripe(process.env.SECRET_CODE);

server.post("/", async (req, res) => {
  const { id, totalPrice } = req.body;

  const amount = Number(totalPrice);

  // console.log(typeof amount);
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Animercce",
      payment_method: id,
      confirm: true,
    });
    // console.log(payment);
    res.status(200).json({ message: "Successfull payment" });
  } catch (error: any) {
    console.log(error.raw.message);
    res.status(400).send(error.raw.message);
  }
});

export default server;