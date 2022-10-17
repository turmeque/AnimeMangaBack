import axios from "axios"
import { Request, Response } from "express";
import db from "../../models";




// ruta createAnimeFavorites---http://localhost:3000/animeFavorites----//


export const createAnimeFavorite= async (obj: any) => {
    
    const { title,image,trailer,release,rating,description,producers,popularity,genres,price,user } = obj;

    const exists= await db.AnimeFavorites.findOne({ where: { title: title } });
    if (exists) return ({ Info: "Anime already exists" });
   
 const fv = await db.AnimeFavorites.create({ title,image,trailer,release,rating,description,producers,popularity,genres,price });

    user.forEach(async (element:any) => {
      const found = await db.Users.findByPk(element);
      fv?.addUser([found]);
  });
  
   

  
    return fv;
  };
  export const deleteAnimeFavorites = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await db.AnimeFavorites.destroy({
        where: {
          id,
        },
      });
      res.send({ info: "AnimeFavorites deleted!!" });
    } catch (error) {
      res.send({ error: "Can`t delete AnimeFavorites" });
    }
  };