import express from "express";
import { getUserController } from "../controllers/user";
import { getUserCalc } from "../controllers/user";
const Router = express.Router();

Router.get("/ping", getUserController);
Router.get("/pong", getUserCalc);
export default Router;
