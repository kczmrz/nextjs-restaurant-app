import { MongoClient, Db, Collection } from 'mongodb';
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';


/*Interface for a const with database and collection in every api script */
export interface curentlyDatabase {dbName: string, collection: string};

const uri:string = process.env.DB_URI as string;
const configure:any = {
  useUnifiedTopology: false,
  useNewUrlParser: true,
 
}
const client = new MongoClient(uri, configure);

/* Connect with DB - function */
async function dbConnect(dbName:string): Promise<{client: MongoClient; db: Db }>
{
  await client.connect();
  const db = client.db(dbName);
  return { client, db };
} 

/* Disconnect */
async function disconnect(): Promise<void> {
  await client.close();
}

/* Get data from mongodb :) */
async function getCollection<T>(dbname:string, collectionName: string): Promise<Collection<any>> {
  const { db } = await dbConnect(dbname);
  return db.collection<any>(collectionName);
}
export { dbConnect, disconnect, getCollection };
