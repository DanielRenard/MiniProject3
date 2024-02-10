"use strict";
let Models = require("../models"); // matches index.js

const getShots = (res) => {
    Models.Shot.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
        res.status(500).send({ result: 500, error: err.message })
    })
}

const createShot = (data, res) => {
    // creates a new user using JSON data POSTed in req.body
    console.log(data);
    new Models.Shot(data)
      .save()
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
          res.status(500).send({result: 500, error: err.message})
        // res.send({ result: 500, error: err.message });
      });
  };

module.exports = {
    getShots,
    createShot,
}