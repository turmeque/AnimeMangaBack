require("dotenv").config();
import db from "../../models";
const { Reviews, Users } = db;

export const postReview = async (obj: any) => {
  const { productId, rating, comment, UserId, category } = obj;
  try {
    if (category === "manga") {
      let newReview = await Reviews.create({
        MangaId: productId,
        rating,
        comment,
        UserId,
        category,
      });
      return newReview;
    } else {
      let newReview = await Reviews.create({
        AnimeId: productId,
        rating,
        comment,
        UserId,
        category,
      });
      return newReview;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductReview = async (obj: any) => {
  const { category, productId } = obj;
  if (category === "manga") {
    const allMangaComments = await Reviews.findAll({
      where: { MangaId: productId },
    });
    return allMangaComments;
  } else {
    const allAnimeComments = await Reviews.findAll({
      where: { AnimeId: productId },
    });
    return allAnimeComments;
  }
};
