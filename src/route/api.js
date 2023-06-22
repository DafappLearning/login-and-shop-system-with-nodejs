import express from "express";
import userController from "../controller/user-controller.js";
import contactController from "../controller/contact-controller.js";
import addressController from "../controller/address-controller.js";
import shopController from "../controller/shop-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// Users Api
userRouter.get("/api/users/current", userController.get);
userRouter.patch("/api/users/current", userController.update);
userRouter.delete("/api/users/logout", userController.logout);

// Contact Api
userRouter.post("/api/contacts", contactController.create);
userRouter.put("/api/contacts/:id", contactController.update);
userRouter.get("/api/contacts/:id", contactController.get);
userRouter.delete("/api/contacts/:id", contactController.remove);

// Addresses Api
userRouter.post("/api/contact/:id/addresses", addressController.create);
userRouter.get("/api/contact/:id/addresses/:addressId", addressController.get);
userRouter.put(
  "/api/contact/:id/addresses/:addressId",
  addressController.update
);
userRouter.delete(
  "/api/contact/:id/addresses/:addressId",
  addressController.remove
);

// Shop Api
userRouter.post("/api/shops", shopController.create);
userRouter.get("/api/shops/:id", shopController.get);
userRouter.put("/api/shops/:id", shopController.update);
userRouter.delete("/api/shops/:id", shopController.remove);

export { userRouter };
