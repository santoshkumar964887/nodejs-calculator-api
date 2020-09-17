const express = require("express");
const userControlle = require("./controler");
const userRouter = express.Router();
//Handling base routes
userRouter
  .route("/")
  .get(userControlle.getfirstMessage);
  
//handling params routes
userRouter
  .route("/add").post(userControlle.addition);

  userRouter
  .route("/sub").post(userControlle.sub);
  userRouter
  .route("/multiply").post(userControlle.multiply);
  userRouter
  .route("/division").post(userControlle.division);
  
  
module.exports = userRouter;
