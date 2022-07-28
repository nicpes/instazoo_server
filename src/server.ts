import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const prisma = new PrismaClient();

app.get("/animals", async (request, response) => {
  const animals = await prisma.animals.findMany();

  response.json(animals);
});

app.get("/animals/:id(\\d+)", async (request, response, next) => {
  const animalId = Number(request.params.id);
  const animal = await prisma.animals.findUnique({
    where: { id: animalId },
  });

  if (!animal) {
    response.status(404);
    return next("cannot get this animal");
  }

  response.json(animal);
});

app.post("/animals", async (request, response) => {
  const animalData = request.body;
  const animal = await prisma.animals.create({
    data: animalData,
  });

  response.status(201).json(animal);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
