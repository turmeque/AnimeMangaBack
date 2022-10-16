import { Router } from "express";
import { getTopAnimes } from "../controller/controllerTopAnimes";

const router = Router();

router.get("/", getTopAnimes);

module.exports = router;
