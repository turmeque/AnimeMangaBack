//@ts-nocheck

import { Request, Response } from "express";
import db from "../../models";


export const  getAllGenres = async (req: Request, res: Response) => {
  try {
    const genresDB = await db.Genres.findAll();
    res.json({ genresDB });
  } catch (error) {}
};
