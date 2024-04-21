import type { Request, Response } from "express";
import { client } from "../index";
import { match } from "assert";
import { IntegerType } from "mongodb";
export async function getAll(req: Request, res: Response) {
	const db = client.db("skufBD");
	const collection = db.collection("skufcolection");
	const result = await collection.find({}).sort({ "Регион заказчика": 1 }).limit(20).toArray();
	res.json(result);
}

// fetch("localhost:3001/user/ping").then(res=>res.json())

// посчитать поля начальная сумма - процент понижения * поле начальная сумма только у заключенных контрактов

// Статус контракта по закупке
export async function getContract(req: Request, res: Response) {
	const db = client.db("skufBD");
	const collection = db.collection("skufdata");
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
	const collection = db.collection("skufdata");
	const regionID = req.query.params;
	console.log(req.query.params);
	const result = await collection
		.find({
			"Регион заказчика": regionID
		})
		.toArray();
	res.json(result);
}

export async function regionDataBuyer(req: Request, res: Response) {
	const db = client.db("skufBD");
	const collection = db.collection("skufdata");
	const regionID = req.query.params;
	console.log(req.query.params);
	const result = await collection
		.find({ "Регион заказчика": regionID})
		.toArray();
	res.json(result);
}


export async function regionDataProvider(req: Request, res: Response) {
	const db = client.db("skufBD");
	const collection = db.collection("skufdata");
	const regionID = req.query.params;
	console.log(req.query.params);
	const result = await collection
		.find({ "Регион поставщика": regionID})
		.toArray();
	res.json(result);
}

export async function calcAverageDiscount(req: Request, res: Response) {
  const db = client.db("skufBD");
  const collection = db.collection("skufdata");
  const regionID = req.query.params;
  const result = await collection
    .aggregate([
		{
        $match: {
            $or: [{ "Регион заказчика": regionID }, { "Регион поставщика": regionID }],
        },
    	},
      {
        $group: {
          _id: null,
          averageDiscount: { $avg: "$% снижения" },
        },
      },
      {
        $project: {
          _id: 0,
          averageDiscount: 1,
        },
      },
    ])
    .toArray();

  res.json(result);
}

export async function meanCont(req: Request, res: Response) {
    const db = client.db("skufBD");
    const collection = db.collection("skufdata");
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
            count: { $sum: 1 }, //количество доков
          },
        },
        {
          $project: {
            _id: 0, // удалитьы
            totalSum: 1,
            averageSum: { $divide: ["$totalSum", "$count"] }, // 
          },
        },
      ])
      .toArray();
  
    res.json(result);
  }

export async function calcBuy(req: Request, res: Response) {
	const db = client.db("skufBD");
	const collection = db.collection("skufdata");
	const regionID = req.query.params;
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




export async function combinedQuery(req: Request, res: Response) {
  const db = client.db("skufBD");
  const collection = db.collection("skufdata");
  const regionID = req.query.params;

  const result = await collection
    .aggregate([
      {
        $match: { "Регион заказчика": regionID },
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
          count: { $sum: 1 },
          averageDiscount: { $avg: "$% снижения" },
          uniqueSuppliers: { $addToSet: "$Поставщик" },
          uniqueCustomers: { $addToSet: "$ИНН заказчика" },
          completedContracts: {
            $sum: {
              $cond: {
                if: { $in: ["$Статус контракта по закупке", ["Контракт исполнен", "Контракт заключен"]] },
                then: 1,
                else: 0,
              },
            },
          },
          totalFZ44Count: { 
            $sum: {
              $cond: { if: { $eq: ["$ФЗ", "44-ФЗ"] }, then: 1, else: 0 }
            }
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalSum: 1,
          averageSum: { $divide: ["$totalSum", "$count"] },
          averageDiscount: 1,
          numberOfSuppliers: { $size: "$uniqueSuppliers" },
          numberOfCustomers: { $size: "$uniqueCustomers" },
          completedContracts: 1,
          totalCount: "$count",
          completedContractsPercentage: {
            $multiply: [
              { $divide: ["$completedContracts", "$count"] },
              100,
            ],
          },
          totalFZ44Count: 1,
          fz44Percentage: {
            $multiply: [
              { $divide: ["$totalFZ44Count", "$count"] },
              100,
            ]
          }
        },
      },
    ])
    .toArray();

  res.json(result);
}


export async function ratingSum(req: Request, res: Response) {
  const db = client.db("skufBD");
  const collection = db.collection("skufdata");
  const regionName = req.query.params; 

  const result = await collection.aggregate([
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
        _id: "$Регион заказчика",
        totalSum: { $sum: "$adjustedSum" },
      }
    },
    {
      $sort: { totalSum: -1 } 
    },
    {
      $setWindowFields: {
        sortBy: { totalSum: -1 },
        output: {
          rank: { $rank: {} },
          count: {$count: {}}
        }
      }
    },
    {
      $match: { _id: regionName } 
    }
  ]).toArray();

  res.json(result);
}


export async function ratingBuyPerc(req: Request, res: Response) {
  const db = client.db("skufBD");
  const collection = db.collection("skufdata");
  const regionName = req.query.params;

  const result = await collection.aggregate([
    {
      $group: {
        _id: "$Регион заказчика",
        totalContracts: { $sum: 1 }, // Считаем общее количество контрактов
        completedContracts: { // Считаем количество завершенных контрактов
          $sum: {
            $cond: {
              if: { $in: ["$Статус контракта по закупке", ["Контракт исполнен", "Контракт заключен"]] },
              then: 1,
              else: 0,
            },
          },
        },
      },
    },
    {
      $addFields: { // Вычисляем процент завершенных контрактов
        completionRate: { $multiply: [{ $divide: ["$completedContracts", "$totalContracts"] }, 100] },
      },
    },
    {
      $sort: { completionRate: -1 } // Сортируем по completionRate в убывающем порядке
    },
    {
      $setWindowFields: {
        sortBy: { completionRate: -1 },
        output: {
          rank: { $rank: {} },
        },
      },
    },
    {
      $match: { _id: regionName }
    },
  ]).toArray();

  res.json(result);
}

export async function ratingPercent(req: Request, res: Response) {
  const db = client.db("skufBD");
  const collection = db.collection("skufdata");
  const regionName = req.query.params; 

  const result = await collection.aggregate([
    {
      $group: {
        _id: "$Регион заказчика",
        averagePercent: { $avg: "$% снижения" }, // Вычисляем средний % снижения
        count: { $sum: 1 } // Считаем количество закупок в регионе
      }
    },
    {
      $sort: { averagePercent: -1 } // Сортируем по среднему % снижения
    },
    {
      $setWindowFields: {
        sortBy: { averagePercent: 1 },
        output: {
          rank: { $rank: {} } // Добавляем поле rank
        }
      } 
    },
    {
      $match: { _id: regionName } // Фильтруем по заданному региону
    }
  ]).toArray();

  res.json(result);
}


import { FindOptions } from 'mongodb';

interface CustomFindOptions extends FindOptions<Document> {
  "ИНН заказчика": 0 | 1;
  "КПП заказчика": 0 | 1;
  "_id": 0 | 1;
}

export async function tableData(req: Request, res: Response) {
  const db = client.db("skufBD");
  const collection = db.collection("skufdata");

  
  const page = parseInt(req.query.page?.toString() ?? "1", 10);
  const perPage = parseInt(req.query.perPage?.toString() ?? "10", 10);

if (isNaN(page) || isNaN(perPage)) {
    // Обработка ошибки: вернуть сообщение об ошибке или использовать значения по умолчанию
    console.error("Ошибка: page или perPage не являются числами.");
    return res.status(400).json({ error: "Некорректные параметры page или perPage" });
}
  const regionName = req.query.params;

   const result = await collection.find({
    "Регион заказчика": regionName
  }, {
    "ИНН заказчика": 0,
    "КПП заказчика": 0,
    "_id": 0,
  } as CustomFindOptions).skip((page - 1) * perPage).limit(perPage).toArray();
  res.json(result);
}


export async function purchaseNameRanking(req: Request, res: Response) {
  const db = client.db("skufBD");
  const collection = db.collection("skufdata");

  const regionName = req.query.params; 

  const pipeline = [
    {
      $match: {
        "Регион заказчика": regionName,
        "Наименование закупки": { $ne: "Не указано"}
       } 
    },
    {
      $group: {
        _id: "$Наименование закупки",
        count: { $sum: 1 },
      },
    },
    {
      $sort: { count: -1 }, 
    },
    { 
      $setWindowFields: {
        sortBy: { count: -1 }, 
        output: {
          rank: { $rank: {} }, 
        },
      },
    },
    { $limit: 10 }, 
  ];

  const result = await collection.aggregate(pipeline).toArray();


  const outputData = result.map((item) => ({
    name: item._id,
    count: item.count,
    rank: item.rank, 
  }));

  res.json(outputData); 
}


export async function getCountSuppliersCustomers(req: Request, res: Response) {
  const db = client.db("skufBD");
  const collection = db.collection('skufdata');
  const pipeline = [
    {
      $group: {
        _id: null,
        totalSuppliers: { $addToSet: "$Поставщик" },
        totalCustomers: { $addToSet: "$Название заказчика" },
        totalAdjustedSum: {
          $sum: { 
            $subtract: [
              "$Нач сумма закупки",
              { $multiply: ["$Нач сумма закупки", { $divide: ["$% снижения", 100] }] },
            ],
          }
        },
      }
    },
    {
      $project: {
        _id: 0,
        totalSuppliers: { $size: "$totalSuppliers" },
        totalCustomers: { $size: "$totalCustomers" },
        totalAdjustedSum: 1, 
      }
    }
  ];
  const result = await collection.aggregate(pipeline).toArray();
  res.json(result);
}


export async function combinedRating(req: Request, res: Response) {
  const db = client.db("skufBD");
  const collection = db.collection("skufdata");
  const regionName = req.query.params;

  const aggregationStages = [
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
        _id: "$Регион заказчика",
        totalSum: { $sum: "$adjustedSum" },
        totalContracts: { $sum: 1 },
        completedContracts: {
          $sum: {
            $cond: {
              if: { $in: ["$Статус контракта по закупке", ["Контракт исполнен", "Контракт заключен"]] },
              then: 1,
              else: 0,
            },
          },
        },
        averagePercent: { $avg: "$% снижения" },
        count: { $sum: 1 },
      },
    },
    {
      $addFields: {
        completionRate: { $multiply: [{ $divide: ["$completedContracts", "$totalContracts"] }, 100] },
      },
    },
    {
      $sort: { totalSum: -1, completionRate: -1, averagePercent: -1 },
    },
    {
      $setWindowFields: {
        sortBy: { totalSum: -1 },
        output: {
          rankSum: { $rank: {} },
        },
      },
    },
    {
      $setWindowFields: {
        sortBy: { completionRate: -1 },
        output: {
          rankCompletion: { $rank: {} },
        },
      },
    },
    {
      $setWindowFields: {
        sortBy: { averagePercent: -1 },
        output: {
          rankPercent: { $rank: {} },
        },
      },
    },
    {
      $setWindowFields: {
        output: {
          totalCount: { $count: {} },
        },
      },
    },
    {
      $addFields: {
        averageRank: {
          $divide: [
            { $add: ["$rankSum", "$rankCompletion", "$rankPercent"] },
            3,
          ],
        },
      },
    },
    {
      $setWindowFields: {
        sortBy: { averageRank: 1 },
        output: {
          rankFinal: { $rank: {} },
        },
      },
    },
  ];

  if (regionName) {
    aggregationStages.push({ $match: { _id: regionName } }as any);
  }

  const result = await collection.aggregate(aggregationStages).toArray();

  res.json(result);
}