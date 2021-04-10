import { MongoClient } from 'mongodb';

let cachedDb: MongoClient;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  // pull the connection info from the env created by .env or .env.local
  const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  cachedDb = client;
  return await client.connect();
}