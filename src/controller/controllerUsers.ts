require("dotenv").config();
import axios from "axios";
import db from "../../models";
import { users } from "../../seeders/users";

export const createUser = async (obj: any) => {
  const { username, email, password, cellphone } = obj;
  if (!username || !email || !password || !cellphone) {
    throw "Missing data require to create a new user";
  }
  const profile = await db.Profile.create({ username });
  const profile_id = profile.id;
  // console.log(profile_id);
  const newUser = await db.Users.create(obj);
  newUser.setProfile(profile_id);
  return "User created succesfully";
};

export const getAllUsers = async () => {
  const allUsers = await db.Users.findAll();
  return allUsers;
};

export const getUserById = async (id: any) => {
  const user = await db.Users.findByPk(id);
  return user;
};
