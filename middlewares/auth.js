require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_WORD;
import db from "../models";
const auth = async (req = request, res = response, next) => {
  // console.log(req.headers);

  //check if exists the token
  if (!req.headers.authorization) {
    res.status(401).json({ msg: "Access not autorized" });
  } else {
    //check the validation of the token
    const token = req.headers.authorization.split(" ")[1];

    console.log({ token });

    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        res.status(500).json({ msg: "Something went wrong", err });
      } else {
        const user = await db.Users.findByPk(decoded.user.id);
        // console.log(user);

        if (!user) {
          return res
            .status(401)
            .json({ msg: "Invalid token - user delete on DB" });
        }

        if (!user.isActive) {
          return res
            .status(401)
            .json({ msg: "Invalid token - user with state active false" });
        }

        req.user = user;

        next();
      }
    });
  }
};

module.exports = auth;
