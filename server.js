require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const apiUrl = "https://randommer.io/api/Name?nameType=fullname&quantity=20";

console.log("token", process.env.RANDOMMER_API_TOKEN);

app.get("/", (req, res) => {
  res.send("HELLO API");
});

app.get("/names", async (req, res, next) => {
  const result = await axios.get(apiUrl, {
    headers: {
      "X-Api-Key": process.env.RANDOMMER_API_TOKEN,
    },
  });
  res.json(result.data);
});

app.listen(3000, () => {
  console.log("STARTED");
});
