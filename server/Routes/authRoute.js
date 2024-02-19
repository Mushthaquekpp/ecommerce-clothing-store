import express, { Router } from "express";

import { regController } from "../controllers/authController.js";
const route =express.Router();

route.post("/register", regController);

export default route;
