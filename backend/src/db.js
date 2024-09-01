import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const dbName = "theMostComplicatedButton";

const client = new MongoClient(uri);

let collection;

const initMongo = (async () => {
  await client.connect();

  console.log("Connected to MongoDB");

  const db = client.db(dbName);

  collection = db.collection("clicks");
})();

export { collection, initMongo };
