import { Router } from "express";
import { getProductReview, postReview } from "../controller/controllerReviews";
import db from "../../models";
const { Reviews, Users } = db;

const server = Router();

// esta ruta es para cuando un usuario hace un comentario
server.post("/", async (req, res) => {
  const { productId, rating, comment, UserId, category } = req.body;
  const allUsers = await Users.findAll();
  try {
    const resp = await postReview({
      productId,
      rating,
      comment,
      UserId,
      category,
    });
    let user = allUsers.find((j: any) => j.id === UserId);
    let response = {
      ...resp.dataValues,
      username: user.username,
      userImg: user.image,
    };
    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

// esta ruta es para cuando queremos ver todos los comentarios que ha hecho un usuario (admin)
server.get("/byuser/:userId", async (req, res) => {
  const { userId } = req.params;
  const allUsers = await Users.findAll();
  try {
    const allUserReviews = await Reviews.findAll({ where: { UserId: userId } });
    let response = allUserReviews.map((item: any) => {
      let tempObj = item.dataValues;
      let user = allUsers.find((j: any) => j.id === tempObj.UserId);
      tempObj.username = user.username;
      tempObj.userImg = user.image;
      return tempObj;
    });
    res.send(response);
  } catch (err) {
    console.error(err);
  }
});

// esta ruta es para mostrar todos los comentarios de un producto
server.get("/byproduct/:productId", async (req, res) => {
  const { category } = req.query;
  const { productId } = req.params;
  const allUsers = await Users.findAll();
  try {
    const allreviews = await getProductReview({ productId, category });
    let response = allreviews.map((item: any) => {
      let tempObj = item.dataValues;
      let user = allUsers.find((j: any) => j.id === tempObj.UserId);
      tempObj.username = user.username;
      tempObj.userImg = user.image;
      return tempObj;
    });
    res.send(response);
  } catch (err) {
    console.error(err);
  }
});

// esta ruta es para eliminar un comentario (admin)
server.delete("/admindel/:reviewId", async (req, res) => {
  const { reviewId } = req.params;
  try {
    const reviewDeleted = await Reviews.destroy({ where: { id: reviewId } });
    res.send(`The product has been deleted`);
  } catch (err) {
    console.error(err);
  }
});

// esta ruta es para que un usuario pueda eliminar su propio comentario
server.delete("/userdel/:reviewId", async (req, res) => {
  const { reviewId } = req.params;
  const { userId } = req.query;
  try {
    const userReviewDeleted = Reviews.destroy({
      where: { UserId: userId, id: reviewId },
    });
    res.send(`The product has been deleted`);
  } catch (err) {
    console.error(err);
  }
});
export default server;
