import express from "express";
import { getUserController, calcBuy,  getUserCalc, regionData  } from "../controllers/user";
const Router = express.Router();

Router.get("/ping", getUserController);
Router.get("/pong", getUserCalc);
Router.get("/peng", regionData);
Router.get("/pang", calcBuy);
export default Router;
