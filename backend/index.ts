import express from "express";
import { MongoClient } from "mongodb";
import UserRouter from "./routes/user";
const app = express();
export const client = new MongoClient("mongodb://localhost:27017");
const port = 3001;

app.use("/user", UserRouter);

app.use(function (err: any, req: any, res: any, next: any) {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

app.listen(port, async () => {
	await client.connect();
	console.log("Server start listen " + port);
});
