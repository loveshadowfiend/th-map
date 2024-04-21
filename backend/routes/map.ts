import express from "express";
import { getAll, calcBuy,  getContract, regionData , regionDataBuyer,  regionDataProvider,  meanCont, calcAverageDiscount, combinedQuery, ratingSum, ratingBuyPerc, ratingPercent, tableData, purchaseNameRanking, getCountSuppliersCustomers, combinedRating} from "../controllers/map";
const Router = express.Router();

Router.get("/getAll", getAll);
Router.get("/getContract", getContract); // Статус контракта по закупке
Router.get("/regionData", regionData);
Router.get('/regionDataBuyer', regionDataBuyer); // заказчиков в регионе
Router.get('/regionDataProvider', regionDataProvider) // поставщиков в регионе
Router.get("/calcBuy", calcBuy); // количество закупок
Router.get("/meanCont", meanCont); // среднее значение итоговой суммы закупок
Router.get("/calcAverageDiscount", calcAverageDiscount); // средний % снижения
Router.get("/combinedQuery", combinedQuery) // объединенный запрос вывода метрик региона
Router.get("/ratingSum", ratingSum) // рейтинг по итоговой сумме закупок
Router.get("/ratingBuyPerc", ratingBuyPerc) // рейтинг по % выполненных закупок
Router.get("/ratingPercent", ratingPercent) // рейтинг по % сниженияя
Router.get("/tableData", tableData) // таблица закупок
Router.get("/purchaseNameRanking", purchaseNameRanking) // топ категорий товаров по закупке в рег
Router.get("/getCountSuppliersCustomers", getCountSuppliersCustomers) // количество поставщиков, заказчиков и общая сумма закупок по стране
Router.get("/combinedRating", combinedRating) // объединенный рейтинг по 3 показателям 

export default Router;
