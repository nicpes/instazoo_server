import { Router } from "express";
import { PrismaClient } from "@prisma/client";

import {
  validate,
  animalDTO,
  AnimalData,
  AnimalTypeData,
} from "../lib/validation";
import { appendFile } from "fs";

const prisma = new PrismaClient();
const router: Router = Router();

//#region GET ANMALS

// GET ALL ANIMALS
router.get("/all", async (req, res, next) => {
  try {
    const animals = await prisma.animals.findMany({});

    res.json(animals);
  } catch (error) {
    res.status(400).json(error);
    return next(error);
  }
});

// GET ANIMALS BY ID
router.get("/:id(\\d+)", async (req, res, next) => {
  try {
    const animalId = Number(req.params.id);

    const animal = await prisma.animals.findUnique({ where: { id: animalId } });

    if (!animal) {
      res.status(404);
      return next("cannot get this animal");
    }

    res.json(animal);
  } catch (error) {
    res.status(400).json(error);
    return next(error);
  }
});

//#endregion

//#region POST ANIMALS

// POST ANIMALS BY ID
router.post("/", validate({ body: animalDTO }), async (req, res, next) => {
  try {
    const animalData = req.body;
    const animal = await prisma.animals.create({
      data: animalData,
    });

    res.status(201).json(`Correctly added animal ID: ${animal}`);
  } catch (error) {
    res.status(400).json(error);
    return next(error);
  }
});

//#endregion

//#region PATCH ANIMALS

// PATCH ANIMALS BY ID
router.patch(
  "/:id(\\d+)",
  validate({ body: animalDTO }),
  async (req, res, next) => {
    try {
      const animalData: AnimalData = req.body;
      const { id } = req.params;
      const animal = await prisma.animals.update({
        where: { id: Number(id) },
        data: animalData,
      });

      res.status(201).json(`Correctly updated Animal ID: ${animal.id}`);
    } catch (error) {
      res.status(400).json(error);
      return next(error);
    }
  }
);

//#endregion

//#region DELETE ANIMALS

// DELETE ANIMALS BY ID
router.delete("/:id(\\d)", async (req, res, next) => {
  try {
    const { id } = req.params;
    const animal = await prisma.animals.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(`Correctly deleted animal ID: ${animal.id}`);
  } catch (error) {
    res.status(400).json(error);
    return next(error);
  }
});

//#endregion

router.patch("/");

export default router;
