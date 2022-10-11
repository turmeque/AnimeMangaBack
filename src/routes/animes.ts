const { Router } = require("express");
import {
  getAllAnimes,
  forNameAndEpisodes,
  getAnimeById,
} from "../controller/controllerAnimes";

const router = Router();

router.get("/", getAllAnimes);

router.get("/name", forNameAndEpisodes);

router.get("/:id", getAnimeById);

module.exports = router;
