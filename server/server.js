const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3005;
const db = require("../database/dbHandler");

app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static("./dist"));

app.post("/api/bills/", (req, res) => {
  data = req.body;
  console.log(data);
  db.insertBill(data, (err, response) => {
    err ? res.status(412).send() : res.status(200).send(response);
  });
});

app.listen(port, () => console.log(`Listening on port: ${port} boss!!`));
