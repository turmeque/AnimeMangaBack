import { Router } from "express";
import {
  getMangaById,
  getMangaGenres,
  getMangas,
} from "../controller/controllerManga";
const server = Router();

server.get("/", async (req, res) => {
  try {
    const resp = await getMangas();
    console.log(resp.length);
    res.status(200).json(resp);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong" });
  }
});

server.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const resp = await getMangaById(id);
    res.status(200).json(resp);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong" });
  }
});

server.get("/genres", async (req, res) => {
  try {
    const genres = await getMangaGenres();
    res.status(200).json(genres);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong" });
  }
});

export default server;
