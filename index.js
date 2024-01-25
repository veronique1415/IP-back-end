const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });