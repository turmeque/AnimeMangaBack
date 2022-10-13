const {Router} = require ("express");
const animes = require("../controller/controllerAnimes")

const router = Router();



router.get("/",
animes.getAllAnimes
);

router.get("/name", 
animes.forNameAndEpisodes
 
    
)

router.get('/:id', 
animes.getAnimeById
)

module.exports= router
