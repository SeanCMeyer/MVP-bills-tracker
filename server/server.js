require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("../database/dbHandler");
const port = process.env.PORT || 3005;
const axios = require("axios");

app = express();
app.use(express.static("./dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/api/saveAnimal/", (req, res) => {
  data = req.body;
  console.log(data);
  db.insertBill(data, (err, response) => {
    err ? res.status(412).send() : res.status(200).send(response);
  });
});

// The API I am using send the response on res.data.petfinder.pet instead of res.body

app.get("/api/getRandomAnimal", (req, res) => {
  console.log("working on it");
  axios
    .get(
      `http://api.petfinder.com/pet.getRandom?format=json&key=${
        process.env.KEY
      }&animal=dog&output=basic`
    )
    .then(response => {
      //   console.log(response.data.petfinder.pet);
      const petInfo = response.data.petfinder.pet;
      res.status(200).send(petInfo);
    })
    .catch(err => res.status(412).send(err));
});

app.listen(port, () => console.log(`Listening on port: ${port} boss!!`));
