require("dotenv").config();
import db from "../../models";
import { Request, Response } from "express";
import { beforeDestroy } from "../../dist/models/Characters";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = Number(process.env.SALT_ROUNDS);
const secret = process.env.SECRET_WORD;
const salt = bcrypt.genSaltSync(saltRounds);

export const signUp = async (obj: any) => {
    const { username, email, pass, cellphone } = obj;
  let isAdmin = false;

  if (!username || !email || !pass || !cellphone) {
    throw "Missing data require to create a new user";
  }

  if (
    email === "Jhojangutierrez900@gmail.com" ||
    email === "xdarcx@hotmail.es" ||
    email === "p.manolaki95@gmail.com" ||
    email === "sam.caillat@gmail.com" ||
    email === "enzoholgadocdb@gmail.com"
  ) {
     isAdmin = true
  }
  const password = bcrypt.hashSync(pass, salt);
  const user = await db.Users.create({
    username,
    email,
    password,
    cellphone,
    isAdmin,
  });


  const token = jwt.sign({ user }, secret, { expiresIn: "1h" });

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
      const token = jwt.sign({ user }, secret, { expiresIn: "5h" });
      return { msg: "The user has been authenticated", user, token };
    } else {
      throw "Invalid password!!";
    }
  }
};

export const getAllUsers = async () => {
  const allUsers = await db.Users.findAll({include:{model:db.AnimeFavorites}});
  return allUsers;
};

export const getUserEmail = async (email: any) => {
  const user = await db.Users.findOne({ where: { email } });
  return user;
};


export const googleSignIn = async (id_token: string) => {
  if (id_token) return { msg: "Everything Ok", id_token };
  else return { msg: "id_token is necessary" };
};
=======

///-----ruta putUser http://localhost:3000/login/${email}

     exports.putUser = async (req:Request,res:Response)=>{
      try {
        let email = req.params.email;
        let {username,image,cellphone}=req.body;
      let resDB =  await db.Users.update({username,image,cellphone},
          { 
            where:{
              email,
            }
          })
        
          res.send(resDB)
      } catch (error) {
        res.status(400).send("User not update!!")
      }
      
      }
      
      ///-----ruta deleteUser http://localhost:3000/login/${email}
      
      exports.deleteUser = async(req:Request,res:Response)=>{
        try {
            const email=req.params.email
            await db.Users.destroy({
                where:{
                    email,
                }
      
            })
            res.send({info:"User deleted!!"})
        } catch (error) {
            res.send({ error:"Can`t delete User"})
        }
      }

