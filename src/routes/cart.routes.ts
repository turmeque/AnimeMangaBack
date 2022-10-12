import { Router } from "express";
import { postProductInCart } from '../controller/controllerCart'


const server = Router();


server.post("/", async (req, res) => {
    const {id, productId, amount, totalPrice, UserId, category} = req.body
    try {
    //   const resp = await getMangas();
      // console.log(resp.length);
      console.log('hola')
      const response = await postProductInCart({id, productId, amount, totalPrice, UserId, category})
      res.status(200).json('producto agregado al carro con exito');
    } catch (error) {
      console.error(error)
    }
    
  });
  export default server;