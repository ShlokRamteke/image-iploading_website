require("dotenv").config();
const express = require("express");
const app = express();
require("./db/connection");
const cors = require("cors");
const router = require("./routes/router");
const port = 8004;



app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("./uploads"));
app.use(router);

console.log(`Database name is ${process.env.USERS}`);

app.listen(port, () => {
  console.log("server start");
});
