const { Router } = require("express");
require("dotenv").config();
const router = Router();
import manga from "./manga.routes";

router.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello world");
});

router.use("/manga", manga);

export default router;
