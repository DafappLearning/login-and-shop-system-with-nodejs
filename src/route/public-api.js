import express from "express";
import userController from "../controller/user-controller.js";
import shopController from "../controller/shop-controller.js";

const publicRouter = new express.Router();

// User Api
publicRouter.post("/api/users", userController.register);
publicRouter.post("/api/users/login", userController.login);

// Shop Api
publicRouter.get("/api/shops", shopController.search);

export { publicRouter };
