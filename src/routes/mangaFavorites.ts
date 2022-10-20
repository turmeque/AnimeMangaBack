import {Router} from "express"
import { createMangaFavorite, deleteMangaFavorites } from "../controller/controllerMangaFavorites";

import db from "../../models";
const { MangaFavorites } = db;

const server = Router();



server.post("/", async (req, res) => {
    
    const { title,image,score,popularity,chapters,status,synopsis,genres,price,user  } = req.body;
    try {
      const newUser = await createMangaFavorite({  title,image,score,popularity,chapters,status,synopsis,genres,price,user });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(400).json({ msg: "Something went wrong", error });
    }
  });

  server.get("/:userId", async (req, res) => {
    const { userId } = req.params;
    try {
      const response = await MangaFavorites.findAll({ where: { UserId: userId } });
      res.status(200).json(response);
    } catch (err) {
      console.error(err);
    }
  });

  server.delete("/:id",deleteMangaFavorites)



  export default server;