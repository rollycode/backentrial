require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("hello again");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/magic", (req, res) => {
  res.send(" Magic happened , got connected to server ");
});
