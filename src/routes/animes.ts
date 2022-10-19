
const { Router } = require("express");
import {
  getAllAnimes,
  forNameAndEpisodes,
  getAnimeById,
  deleteAnime,
} from "../controller/controllerAnimes";


const router = Router();

router.get("/", getAllAnimes);

router.get("/name", forNameAndEpisodes);

router.get("/:id", getAnimeById);
router.delete("/:id", deleteAnime);


module.exports = router;
