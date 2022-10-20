require("dotenv").config();
import db from "../../models";
const { Cart } = db;

export const postProductInCart = async (obj: any) => {
  const { amount, totalPrice, UserId, productId, id, category } = obj;
  const user = await db.Users.findOne({ where: { id: UserId } });
  try {
    if (user) {
      if (category === "manga") {
        let productAdded = await Cart.create({
          amount,
          totalPrice,
          UserId,
          id,
          MangaId: productId,
        });
        return productAdded;
      } else {
        let productAdded = await Cart.create({
          amount,
          totalPrice,
          UserId,
          id,
          AnimeId: productId,
        });
        return productAdded;
      }
    } else {
      return "el usuario no existe";
    }
  } catch (error) {
    console.log(error);
  }
}
