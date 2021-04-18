const express = require("express");
const mongoose = require("mongoose");
let MongoClient = require("mongodb").MongoClient;
var mongodb = require("mongodb");
const bodyParser = require("body-parser");
const app = express();
const Meeting = require("./model/meeting");
app.use(express.json());
require("dotenv/config");
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/add", async (req, res) => {
  try {
    const myMeet = new Meeting(req.body);
    console.log(req.body);
    await myMeet.save();
    res.redirect("home");
  } catch (err) {
    res.send({ message: err });
  }
});
app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  MongoClient.connect(
    process.env.DB_STRING,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo
        .collection("meetings")
        .deleteOne(
          { _id: new mongodb.ObjectID(id.toString()) },
          function (err, obj) {
            if (err) throw err;
            db.close();
          },
        );
    }
  );
});
app.get("", (req, res) => {
  res.render("index");
});
app.get("/home", (req, res) => {
  var result = [];
  MongoClient.connect(
    process.env.DB_STRING,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err;
      var cursor = db.db("myFirstDatabase");
      cursor
        .collection("meetings")
        .find()
        .forEach(
          function (doc, err) {
            if (err) console.log(err);
            result.push(doc);
          },
          function () {
            db.close();
            res.render("home", { data: result });
          }
        );
    }
  );
});
app.get("/about", (req, res) => {
  res.render("about");
});

mongoose.connect(
  process.env.DB_STRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log("Connected to dB");
  }
);

app.listen(process.env.PORT ||5000, () => {
  console.log("Server Started");
});
