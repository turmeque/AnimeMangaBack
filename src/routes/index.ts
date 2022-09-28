const { Router } = require('express');
const anime= require("./animes.ts")
const genre= require("./genres.ts")

require('dotenv').config()





const router = Router();
router.use("/animes",anime)
router.use("/genres",genre)





export default router;