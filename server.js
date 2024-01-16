const express = require("express");
const cors = require("cors");
const {
  insertOne,
  find,
  createConnection,
  updateOne,
} = require("./db_utility");
const { ObjectId } = require("mongodb");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("App is Up and Running");
});

const collectionName = "todo";

app.post("/post", async (req, res) => {
  let response = null;
  try {
    const reqData = req?.body || {};
    response = await insertOne(collectionName, reqData);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
// testInsertedId = 65a2e6f47df2db777612a876
app.get("/get", async (req, res) => {
  let response = null;
  try {
    response = await find(collectionName, {});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

app.put("/put", async (req, res) => {
  let response = null;
  try {
    const reqData = req?.body?.data || {};
    const filterQry = { _id: new ObjectId(req?.body?.id) };
    response = await updateOne(collectionName, filterQry, reqData);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, (err) => {
  console.log(`Server is Up and Running!! ${PORT}`);
});
createConnection();
