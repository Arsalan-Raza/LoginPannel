const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }, () => {
  console.log("DataBase Connected");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
