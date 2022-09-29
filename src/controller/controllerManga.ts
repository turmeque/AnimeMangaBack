require("dotenv").config();
import axios from "axios";
import db from "../../models";

export const getMangas = async () => {
  // let allMangas = [];
  const mangasDb = await db.Manga.findAll();
  if (!mangasDb.length) {
    const url = "https://api.jikan.moe/v4/manga/";
    const url2 = "https://api.jikan.moe/v4/manga?page=2";
    const url3 = "https://api.jikan.moe/v4/manga?page=3";
    const url4 = "https://api.jikan.moe/v4/manga?page=4";

    const response = await axios.get(url);
    const response2 = await axios.get(url2);
    const response3 = await axios.get(url3);
    const response4 = await axios.get(url4);

    const callOne = response.data.data.map(
      (d: {
        [x: string]: any;
        genres: any;
        mal_id: any;
        synopsis: any;
        status: any;
        chapters: any;
        popularity: any;
        score: any;
        images: any;
        titles: {
          filter(arg0: (d: any) => boolean): any;
          map(arg0: (d: any) => any): unknown;
          title: any;
        };
      }) => {
        return {
          id: d.mal_id,
          title: d.titles
            .filter((d) => d.type === "Default")
            .map((d: { title: any }) => d.title)
            .join(" "),
          image: d.images.jpg.large_image_url,
          score: d.score !== null ? d.score : 5,
          popularity: d.popularity,
          chapters: d.chapters !== null ? d.chapters : 100,
          status: d.status,
          synopsis: d.synopsis,
          genres: d.genres
            .map((d: { name: any; type: any }) => d.name)
            .join(", "),
        };
      }
    );

    const callTwo = response2.data.data.map(
      (d: {
        [x: string]: any;
        genres: any;
        mal_id: any;
        synopsis: any;
        status: any;
        chapters: any;
        popularity: any;
        score: any;
        images: any;
        titles: {
          filter(arg0: (d: any) => boolean): any;
          map(arg0: (d: any) => any): unknown;
          title: any;
        };
      }) => {
        return {
          id: d.mal_id,
          title: d.titles
            .filter((d) => d.type === "Default")
            .map((d: { title: any }) => d.title)
            .join(" "),
          image: d.images.jpg.large_image_url,
          score: d.score !== null ? d.score : 5,
          popularity: d.popularity,
          chapters: d.chapters !== null ? d.chapters : 100,
          status: d.status,
          synopsis: d.synopsis,
          genres: d.genres
            .map((d: { name: any; type: any }) => d.name)
            .join(", "),
        };
      }
    );

    const callTree = response3.data.data.map(
      (d: {
        [x: string]: any;
        genres: any;
        mal_id: any;
        synopsis: any;
        status: any;
        chapters: any;
        popularity: any;
        score: any;
        images: any;
        titles: {
          filter(arg0: (d: any) => boolean): any;
          map(arg0: (d: any) => any): unknown;
          title: any;
        };
      }) => {
        return {
          id: d.mal_id,
          title: d.titles
            .filter((d) => d.type === "Default")
            .map((d: { title: any }) => d.title)
            .join(" "),
          image: d.images.jpg.large_image_url,
          score: d.score !== null ? d.score : 5,
          popularity: d.popularity,
          chapters: d.chapters !== null ? d.chapters : 100,
          status: d.status,
          synopsis: d.synopsis,
          genres: d.genres
            .map((d: { name: any; type: any }) => d.name)
            .join(", "),
        };
      }
    );

    const callFour = response4.data.data.map(
      (d: {
        [x: string]: any;
        genres: any;
        mal_id: any;
        synopsis: any;
        status: any;
        chapters: any;
        popularity: any;
        score: any;
        images: any;
        titles: {
          filter(arg0: (d: any) => boolean): any;
          map(arg0: (d: any) => any): unknown;
          title: any;
        };
      }) => {
        return {
          id: d.mal_id,
          title: d.titles
            .filter((d) => d.type === "Default")
            .map((d: { title: any }) => d.title)
            .join(" "),
          image: d.images.jpg.large_image_url,
          score: d.score !== null ? d.score : 5.0,
          popularity: d.popularity,
          chapters: d.chapters !== null ? d.chapters : 100,
          status: d.status,
          synopsis: d.synopsis,
          genres: d.genres
            .map((d: { name: any; type: any }) => d.name)
            .join(", "),
        };
      }
    );

    let allMangas = [...callOne, ...callTwo, ...callTree, ...callFour];

    await db.Manga.bulkCreate(allMangas);

    return allMangas;
  } else return mangasDb;
};

export const getMangaGenres = async () => {
  const url = "https://api.jikan.moe/v4/genres/manga";
  const response = await axios(url);
  const genre = response.data.data.map((d: { name: any }) => {
    return {
      name: d.name,
    };
  });
  return genre;
};
