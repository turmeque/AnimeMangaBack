import axios from "axios"
import { Request, Response } from "express";
import db from "../../models";




// ruta createAnimeFavorites---http://localhost:3000/animeFavorites----//


export const createMangaFavorite= async (obj: any) => {
    
    const { title,image,trailer,score,popularity,chapters,status,synopsis,genres,price,user } = obj;

    const exists= await db.MangaFavorites.findOne({ where: { title: title } });
    if (exists) return ({ Info: "Manga already exists" });
   
 const fv = await db.MangaFavorites.create({ title,image,trailer,score,popularity,chapters,status,synopsis,genres,price });

    user.forEach(async (element:any) => {
      const found = await db.Users.findByPk(element);
      fv?.addUser([found]);
  });
  
   return fv;
  };


  export const deleteMangaFavorites = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await db.MangaFavorites.destroy({
        where: {
          id,
        },
      });
      res.send({ info: "MangaFavorites deleted!!" });
    } catch (error) {
      res.send({ error: "Can`t delete MangaFavorites" });
    }
  };