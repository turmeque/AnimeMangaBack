const {Router} = require ("express");
const animes = require("../controller/ControllerAnimes")

const router = Router();



router.get("/",
animes.getAllAnimes
)
module.exports= router
