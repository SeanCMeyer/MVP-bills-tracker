mongoose = require("mongoose");
require("dotenv").config();
const Schema = mongoose.Schema;
const { DB_PORT, DB_URI, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URI}:${DB_PORT}/${DB_NAME}`;
const db = mongoose.connection;

mongoose.connect(
  URI,
  { useNewUrlParser: true }
);
db.on("connected", () => {
  console.log("connected to DB boss!");
});
db.on("error", () => {
  console.log("I'm sorry, but we've failed out connection attempt!!!", err);
});

const billSchema = new Schema({
  name: String,
  Product_type: String,
  amount: Number
});

const Bill = mongoose.model("Bill", billSchema);

const insertBill = (data, cb) => {
  const billInfo = new Bill({
    name: data.name,
    Product_type: data.Product_type,
    amount: parseInt(data.amount)
  });

  billInfo.save((err, response) => {
    if (err) {
      cb(err);
    } else {
      cb(null, response);
    }
  });
};

module.exports = { insertBill };
