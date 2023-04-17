import {dbConnect, disconnect, getCollection } from "@/mongodb/library/mongo";
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';
import { curentlyDatabase } from "@/mongodb/library/mongo";
export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  /* variable with info about database */
    const curentlyDB: curentlyDatabase = 
      {
        dbName: process.env.DB_Name as string, 
        collection: process.env.DB_Extras as string
      };
      const { method } = req;
      
      await dbConnect(curentlyDB.dbName);
      const collection = await getCollection(curentlyDB.dbName, curentlyDB.collection);

      /*GET */
      if(method === "GET"){
        try { 
          const productList = await collection.find({}).toArray();
          res.json(productList);
         } 
        catch(error) {
          res.status(500).json(error);
         
        }

      };

      /*POST */
      if(method === "POST"){
        try {
          /*If you wanna add data, you must use POSTMAN */
        await collection.insertOne(req.body);
         res.status(201).json({message: "succes"});
        }
        catch(error) {
           res.status(500).json(error);
        }
      };
      

    
}