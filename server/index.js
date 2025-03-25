require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("car doctor server runnig");
});

app.listen(process.env.PORT, () => {
  console.log(`car doctor server running on port ${process.env.PORT}`);
});
