const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 8080;




app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });