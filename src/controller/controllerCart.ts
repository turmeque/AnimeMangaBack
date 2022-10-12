require("dotenv").config();
import axios from "axios";
import db from "../../models";
const {Cart, cartManga, cartAnime, Animes} = db;

export const postProductInCart = async (obj: any) => {
  const { amount, totalPrice, UserId, productId, id, category } = obj;
  const user = await db.Users.findOne({ where: { id: UserId } });
  try {
    if (user) {
      const productAdded = await Cart.create({
        amount,
        totalPrice,
        UserId,
        id,
      });
      console.log(category === "anime");
      if (category === "manga") {
        let newMangaToCart =  cartManga.create({
          MangaId: productId,
          CartId: id,
        }); 
        console.log("manga", newMangaToCart);
      } else {
        console.log("holis");
        let newAnimeToCart = await Animes.findOne({where:{id: productId}})
        console.log('anime', newAnimeToCart);
      }
        console.log("productAdded");
      return productAdded;
    } else {
      return "el usuario no existe";
    }
  } catch (error) {}
};
