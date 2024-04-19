import express from "express";
import { getUserController } from "../controllers/user";
import { getUserCalc } from "../controllers/user";
<<<<<<< HEAD
import { regionData } from "../controllers/user";
import { calcBuy } from "../controllers/user";
=======
>>>>>>> 806b517d9a99f0e7de35b3235b621dd8b324f156
const Router = express.Router();

Router.get("/ping", getUserController);
Router.get("/pong", getUserCalc);
<<<<<<< HEAD
Router.get("/peng", regionData);
Router.get("/pang", calcBuy);
=======
>>>>>>> 806b517d9a99f0e7de35b3235b621dd8b324f156
export default Router;
