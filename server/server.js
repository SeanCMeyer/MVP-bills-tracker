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
  db.insertBill(data, (err, response) => {
    err ? res.status(412).send() : res.status(200).send(response);
  });
});

// The API I am using send the response on res.data.petfinder.pet instead of res.body
// pet types:
// barnyard, bird, cat, dog, horse, reptile, smallfurry

app.get("/api/getAnimal/:animal", (req, res) => {
  const { animal } = req.params;
  console.log(animal);
  axios
    .get(
      `http://api.petfinder.com/pet.getRandom?format=json&key=${
        process.env.KEY
      }&animal=${animal}&output=basic`
    )
    .then(response => {
      const petInfo = response.data.petfinder.pet;
      res.status(200).send(petInfo);
    })
    .catch(err => {
      console.log(err);
      res.status(412).send(err);
    });
});

// app.get("/api/getShelterList/:zip", (req, res) => {
//   const zip = req.params.zip;
//   axios
//     .get(
//       `http://api.petfinder.com/shelter.find?format=json&location&=${zip}&key=${
//         process.env.KEY
//       }&name=full`
//     )
//     .then(response => {
//       const shelterInfo = response.data.petfinder.header.message.info.location.$t;
//       console.log(shelterInfo);
//       // res.status(200).send(response);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

app.listen(port, () => console.log(`Listening on port: ${port} boss!!`));
