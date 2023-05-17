import {dbConnect, disconnect, getCollection } from "@/mongodb/library/mongo";
import { NextApiRequest, NextApiResponse } from "next";
import { curentlyDatabase } from "@/mongodb/library/mongo";
import { GetOrderCheck, PostOrderCheck } from "@/Config";
export default async function PostOrder(req: NextApiRequest, res: NextApiResponse)
{
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  /* variable with info about database */
    const curentlyDB: curentlyDatabase = 
      {
        dbName: process.env.DB_Name as string, 
        collection: process.env.DB_Order as string
      };
      const { method } = req;
      
      await dbConnect(curentlyDB.dbName);
      const collection = await getCollection(curentlyDB.dbName, curentlyDB.collection);

      /*GET */
      if(method === "GET"){
        if(GetOrderCheck) {
          try { 
            const productList = await collection.find({}).toArray();
            res.json(productList);
           } 
          catch(error) {
            res.status(500).json({error: "Check variable 'GetOrderCheck' in Config.ts or database connection or ENV file"});
           
          }
        }
        else {
          res.status(200).json({error: "Check variable 'GetOrderCheck' in Config.ts or database connection or ENV file"})
        }
       
       
      };

      /*POST */
      if(method === "POST"){
        if(PostOrderCheck) {
          try {
            await collection.insertOne(req.body);
            res.status(201).json({message: "succes"});
           }
           catch(error) {
              res.status(500).json(error);
           }
        }
        else {
          res.status(200).json({error: "Check variable 'PostOrderCheck' in Config.ts or database connection or ENV file"})

        }
       
      };
      

    
}