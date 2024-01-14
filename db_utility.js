const { MongoClient } = require("mongodb");

const DB_URL = "mongodb://127.0.0.1:27017/fullstack1";

const client = new MongoClient(DB_URL, {
  useNewUrlParser: true,
  monitorCommands: true,
});

// const dbName = "fullstack1";

const createConnection = async () => {
  try {
    await client.connect();
    console.log("Database Connection Established Successfully!!");
  } catch (error) {
    console.log(error);
  }
};

//Queries
const insertOne = async (_collectionName, _payloadDoc) => {
  let queryResponse = null;
  try {
    queryResponse = await client
      .db(process.env.DB_NAME)
      .collection(_collectionName)
      .insertOne(_payloadDoc);
  } catch (error) {
    console.log(error);
  }
  return queryResponse;
};

const find = async (_collectionName, _filter) => {
  let queryResponse = null;
  try {
    queryResponse = await client
      .db(process.env.DB_NAME)
      .collection(_collectionName)
      .find(_filter)
      .toArray();
  } catch (error) {
    console.log(error);
  }
  return queryResponse;
};

const updateOne = async (_collectionName, _filter, _payloadDoc) => {
  let queryResponse = null;
  try {
    queryResponse = await client
      .db(process.env.DB_NAME)
      .collection(_collectionName)
      .updateOne(_filter, { $set: { isCompleted: _payloadDoc?.isCompleted } });
  } catch (error) {
    console.log(error);
  }
  return queryResponse;
};

module.exports = {
  createConnection,
  insertOne,
  find,
  updateOne,
};
