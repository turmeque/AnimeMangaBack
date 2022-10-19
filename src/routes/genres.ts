import { Router } from "express";
import { getAllGenres } from "../controller/controllerGenres";


const router = Router();

router.get("/", getAllGenres);

module.exports = router;
