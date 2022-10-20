import {Router} from "express"
import { createAnimeFavorite, deleteAnimeFavorites } from "../controller/ControllerAnimesFavorites";
import db from "../../models";
const { AnimeFavorites } = db;

const server = Router();



server.post("/", async (req, res) => {
    
    const {  title,image,trailer,release,rating,description,producers,popularity,genres,price,user } = req.body;
    try {
      const newUser = await createAnimeFavorite({  title,image,trailer,release,rating,description,producers,popularity,genres,price,user });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(400).json({ msg: "Something went wrong", error });
    }
  });

  server.get("/:userId", async (req, res) => {
    const { userId } = req.params;
    try {
      const response = await AnimeFavorites.findAll({ where: { UserId: userId } });
      res.status(200).json(response);
    } catch (err) {
      console.error(err);
    }
  });
  
  server.delete("/:id",deleteAnimeFavorites)



  export default server;