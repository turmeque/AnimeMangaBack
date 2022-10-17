import {Router} from "express"
import {
  createMangaFavorite, deleteMangaFavorites
    
  } from "../controller/controllerMangaFavorites";

const server = Router();



server.post("/", async (req, res) => {
    
    const { title,image,trailer,score,popularity,chapters,status,synopsis,genres,price,user  } = req.body;
    try {
      const newUser = await createMangaFavorite({  title,image,trailer,score,popularity,chapters,status,synopsis,genres,price,user });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(400).json({ msg: "Something went wrong", error });
    }
  });

  server.delete("/:id",deleteMangaFavorites)



  export default server;