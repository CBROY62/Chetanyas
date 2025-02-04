import express from "express";
const app = express();

import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnction.js";

dotenv.config({ path: "backend/config/config.env" });


//connect to database
connectDatabase()

console.log("hello");

//imports all routes
import productRouters from "./routes/products.js";


app.use("/api/v1", productRouters);

app.listen(process.env.PORT, () => {
  console.log(
    `Seravar started on PORT:${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
