require("dotenv").config();
const { Router } = require("express");
const router = Router();
const anime = require("./animes.ts");
const genre = require("./genres.ts");
import manga from "./manga.routes";
import users from "./user.routes";

router.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello world");
});

router.use("/manga", manga);
router.use("/users", users);
router.use("/animes", anime);
router.use("/genres", genre);

export default router;
