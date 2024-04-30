import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import {
  addProductController,
  deleteProductController,
  getOneProductController,
  getProductController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  searchProductController,
  updateProductController,
} from "../controllers/ProductController.js";
import formidable from "express-formidable";
const productRoute = express.Router();
// product creation
productRoute.post(
  "/add-product",
  requireSignIn,
  isAdmin,
  formidable(),
  addProductController
);
//getting product
productRoute.get("/get-product", getProductController);
//getting single product
productRoute.get("/single-product/:slug", getOneProductController);
//product photo
productRoute.get("/photo/:pid", productPhotoController);
//deleting product
productRoute.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductController
);

//product filter
productRoute.post("/product-filters", productFilterController);

//product edit
productRoute.put(
  "/edit-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
//product search
productRoute.get("/search/:keyword", searchProductController);

//count product
productRoute.get("/product-count", productCountController);

//product per page

productRoute.get("/product-list/:page", productListController);

export default productRoute;
