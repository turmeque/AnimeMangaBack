//@ts-nocheck
import axios from "axios";
import { Request, Response } from "express";
import db from "../../models";



//ruta top animes http://localhost:3000/topAnimes

export const getTopAnimes = async (req: Request, res: Response) => {
  try {
    const topAnimesDB = await db.TopAnimes.findAll();

    res.json({ topAnimesDB });
  } catch (error) {}
};
