import type { Request, Response } from "express";
import { client } from "../index";
export async function getUserController(req: Request, res: Response) {
	const db = client.db("skufBD");
	const collection = db.collection("skufcolection");
	const result = await collection.find({}).sort({ "Регион заказчика": 1 }).limit(20).toArray();
	res.json(result);
}

// fetch("localhost:3001/user/ping").then(res=>res.json())

// посчитать поля начальная сумма - процент понижения * поле начальная сумма только у заключенных контрактов

// Статус контракта по закупке
export async function getUserCalc(req: Request, res: Response) {
	const db = client.db("skufBD");
	const collection = db.collection("skufcolection");
	const result = await collection
		.find({
			$or: [
				{ "Статус контракта по закупке": "Контракт исполнен" },
				{ "Статус контракта по закупке": "Контракт заключен" },
			],
		})
		.limit(20)
		.toArray();
	res.json(result);
}
export async function regionData(req: Request, res: Response) {
	const db = client.db("skufBD");
	const collection = db.collection("skufcolection");
	const regionID = req.query.params;
	console.log(req.query.params);
	const result = await collection
		.find({
			$or: [{ "Регион заказчика": regionID }, { "регион поставщика": regionID }],
		})
		.toArray();
	res.json(result);
}


export async function calcBuy(req: Request, res: Response) {
	const db = client.db("skufBD");
	const collection = db.collection("skufcolection");
	const regionID = req.query.params;
	console.log(req.query.params);
	const result = await collection
		.aggregate([
			{
				$match: {
					$or: [{ "Регион заказчика": regionID }, { "Регион поставщика": regionID }],
				},
			},
			{
				$addFields: {
					adjustedSum: {
						$subtract: [
							"$Нач сумма закупки",
							{ $multiply: ["$Нач сумма закупки", { $divide: ["$% снижения", 100] }] },
						],
					},
				},
			},
			{
				$group: {
					_id: null,
					totalSum: { $sum: "$adjustedSum" },
				},
			},
		])
		.toArray();
	res.json(result);
}
