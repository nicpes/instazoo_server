import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import animals from "./routes/animals";

dotenv.config();

import {
  validate,
  AnimalData,
  DietTypeData,
  AnimalTypeData,
  HabitatTypeData,
} from "./lib/validation";

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/animals", animals);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
