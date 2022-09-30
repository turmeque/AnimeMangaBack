const { Router } = require('express');
const anime= require("./animes.ts")
const genre= require("./genres.ts")
const topAnimes = require("./topAnimes.ts")

require('dotenv').config()





const router = Router();
router.use("/animes",anime)
router.use("/genres",genre)
router.use("/topAnimes",topAnimes)






export default router;