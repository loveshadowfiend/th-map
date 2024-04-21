import express from "express";
import { getAll, calcBuy,  getContract, regionData , regionDataBuyer,  regionDataProvider} from "../controllers/map";
const Router = express.Router();

Router.get("/getAll", getAll);
Router.get("/getContract", getContract);
Router.get("/regionData", regionData);
Router.get('/regionDataBuyer',  regionDataBuyer);
Router.get('/regionDataProvider', regionDataProvider)
Router.get("/calcBuy", calcBuy);
export default Router;
