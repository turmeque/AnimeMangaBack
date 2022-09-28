<<<<<<< HEAD
const { Router } = require("express");
require("dotenv").config();
const router = Router();
import manga from "./manga.routes";
=======
const { Router } = require('express');
const anime= require("./animes.ts")
const genre= require("./genres.ts")

require('dotenv').config()





const router = Router();
router.use("/animes",anime)
router.use("/genres",genre)
>>>>>>> e4131a0e3044a2574eb72084e622aa3385fd72bd

router.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello world");
});

router.use("/manga", manga);

export default router;
