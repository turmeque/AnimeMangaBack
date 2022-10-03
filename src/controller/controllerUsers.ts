require("dotenv").config();
import axios from "axios";
import { User } from "oidc-client";
import db from "../../models";
//import { users } from "../../seeders/users";

export const createUser = async (obj: any) => {
  const { username, email, password, cellphone } = obj;
  
  
  const exists= await db.Users.findOne({ where: { username: username } });
        if (exists) 
        return ({ Info: "User already exists" });
  
        if (!username || !email || !password || !cellphone) {
    throw "Missing data require to create a new user";
  }
  const profile = await db.Profile.create({ username });
  const profile_id = profile.id;
  // console.log(profile_id);
  const newUser = await db.Users.create(obj);
  newUser.setProfile(profile_id);
  return newUser;
};

export const getAllUsers = async () => {
  const allUsers = await db.Users.findAll();
  return allUsers;
};

export const getUserEmail= async (email:any) => {
  const user = await db.Users.findOne({ where: { email:email } });
  return user;
};
