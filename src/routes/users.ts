import { Router } from "express";
import { PrismaClient } from "@prisma/client";

import { validate, userDTO, userData } from "../lib/middleware/validation";

const prisma = new PrismaClient();
const router: Router = Router();

//#region GET ANMALS

// GET ALL user
router.get("/all", async (req, res, next) => {
  try {
    const user = await prisma.user.findMany({});

    res.json(user);
  } catch (error) {
    res.status(400).json(error);
    return next(error);
  }
});

// GET user BY ID
router.get("/:id(\\d+)", async (req, res, next) => {
  try {
    const userId = Number(req.params.id);

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      res.status(404);
      return next("cannot get this user");
    }

    res.json(user);
  } catch (error) {
    res.status(400).json(error);
    return next(error);
  }
});

//#endregion

//#region POST user

// POST user BY ID
router.post("/", validate({ body: userDTO }), async (req, res, next) => {
  try {
    const userData: userData = req.body;
    const user = await prisma.user.create({
      data: userData,
    });

    res.status(201).json(`Correctly added user ID: ${user.id}`);
  } catch (error) {
    res.status(400).json(error);
    return next(error);
  }
});

//#endregion

//#region PATCH user

// PATCH user BY ID
router.patch(
  "/:id(\\d+)",
  validate({ body: userDTO }),
  async (req, res, next) => {
    try {
      const userData: userData = req.body;
      const { id } = req.params;
      const user = await prisma.user.update({
        where: { id: Number(id) },
        data: userData,
      });

      res.status(201).json(`Correctly updated user ID: ${user.id}`);
    } catch (error) {
      res.status(400).json(error);
      return next(error);
    }
  }
);

//#endregion

//#region DELETE user

// DELETE user BY ID
router.delete("/:id(\\d)", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(`Correctly deleted user ID: ${user.id}`);
  } catch (error) {
    res.status(400).json(error);
    return next(error);
  }
});

//#endregion

export default router;
