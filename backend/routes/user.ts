import express from "express";
import { getUserController } from "../controllers/user";
import { getUserCalc } from "../controllers/user";
import { regionData } from "../controllers/user";
import { calcBuy } from "../controllers/user";
const Router = express.Router();

Router.get("/ping", getUserController);
Router.get("/pong", getUserCalc);
Router.get("/peng", regionData);
Router.get("/pang", calcBuy);
export default Router;
