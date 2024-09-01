import express from "express";
import { initMongo, collection } from "./db.js";
import { v4 as uuidv4 } from "uuid";

const PORT = 8080;
const app = express();

app.use(express.json());

app.get("/api/click", async (req, res) => {
  const from = req.headers?.from;
  console.log(req.headers);

  if (!from) {
    return res.status(201).json({ clicks: 0, uuid: uuidv4() });
  } else {
    const result = await collection.findOne({ from });

    if (result) {
      return res.status(200).json({ clicks: result.clicks });
    } else {
      return res.status(201).json({ clicks: 0, uuid: uuidv4() });
    }
  }
});

app.patch("/api/click", async (req, res) => {
  const from = req.body?.from;

  if (!from) {
    return res.status(400).json({ message: "failure" });
  } else {
    const result = await collection.findOneAndUpdate(
      { from },
      { $inc: { clicks: 1 } },
      { returnDocument: "after" }
    );
    console.log(result);

    if (!result) {
      await collection.insertOne({ from, clicks: 1 });
    }

    return res.status(200).json({ message: "success" });
  }
});

app.listen(PORT, async () => {
  await initMongo;

  console.log(`server http://localhost:${PORT} started`);
});
