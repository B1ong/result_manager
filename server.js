import dotenv from 'dotenv/config;
import express from 'express'
import {connectDB}
const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Running on port : ${process.env.PORT}`);
});