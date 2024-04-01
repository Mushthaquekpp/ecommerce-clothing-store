import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import {
  addProductController,
  deleteProductController,
  getOneProductController,
  getProductController,
  productPhotoController,
  updateProductController,
} from "../controllers/ProductController.js";
import formidable from "express-formidable";
const productRoute = express.Router();

productRoute.post(
  "/add-product",
  requireSignIn,
  isAdmin,
  formidable(),
  addProductController
);
productRoute.get("/get-product", getProductController);

productRoute.get("/single-product/:slug", getOneProductController);

productRoute.get("/photo/:pid", productPhotoController);

productRoute.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductController
);

productRoute.put(
  "/edit-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
export default productRoute;
