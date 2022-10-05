require("dotenv").config();
import db from "../../models";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = Number(process.env.SALT_ROUNDS);
const secret = process.env.SECRET_WORD;
const salt = bcrypt.genSaltSync(saltRounds);

export const signUp = async (obj: any) => {
  const { username, email, pass, cellphone } = obj;
  if (!username || !email || !pass || !cellphone) {
    throw "Missing data require to create a new user";
  }

  const password = bcrypt.hashSync(pass, salt);

  const user = await db.Users.create({ username, email, password, cellphone });

  const token = jwt.sign({ user }, secret, { expiresIn: "1hr" });

  return { user, token };
};

export const signIn = async (obj: any) => {
  const { email, password } = obj;
  const user = await db.Users.findOne({
    where: { email },
  });
  if (!user) {
    throw "User with this email not found";
  } else {
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ user }, secret, { expiresIn: "1hr" });
      return { user, token };
    } else {
      throw "Invalid password!!";
    }
  }
};

export const getAllUsers = async () => {
  const allUsers = await db.Users.findAll();
  return allUsers;
};

export const getUserEmail = async (email: any) => {
  const user = await db.Users.findOne({ where: { email } });
  return user;
};
