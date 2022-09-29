//@ts-nocheck
import axios from "axios";
import { Request, Response } from "express";
import db from "../../models";

import { Op } from "sequelize";
// import cloudinary from '../../config/utils'
import cloudinary from "../../config/utils";

exports.getAllAnimes = async (req: Request, res: Response) => {
  try {
    const animesDB = await db.Animes.findAll();
    res.json(animesDB);
  } catch (error) {}
};
