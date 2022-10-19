require("dotenv").config();
const { Router } = require("express");
const router = Router();
const anime = require("./animes.ts");
import animeFavorite from "./animesFavorites";
import mangaFavorite from "./mangaFavorites";
const genre = require("./genres.ts");
const topAnime = require("./topAnimes.ts");
import manga from "./manga.routes";
import login from "./login.routes";
import reviews from "./reviews.routes";
import payment from "./payment.routes";
import sales from "./sales.routes";
import cart from "./cart.routes"


router.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello world");
});

router.use("/manga", manga);
router.use("/login", login);
router.use("/payment", payment);
router.use("/sales", sales);
router.use("/animes", anime);
router.use("/genres", genre);
router.use("/topAnimes", topAnime);
router.use("/animefavorites", animeFavorite);
router.use("/cart", cart);
router.use("/reviews", reviews);
router.use("/mangafavorites", mangaFavorite);

export default router;
