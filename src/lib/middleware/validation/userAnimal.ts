import { Static, Type } from "@sinclair/typebox";

export const animalDTO = Type.Object(
  {
    name: Type.Optional(Type.String()),
    activeTime: Type.String(),
    lenghtMin: Type.Optional(Type.Integer()),
    lenghtMax: Type.Optional(Type.Integer()),
    weightMin: Type.Integer(),
    weightMax: Type.Integer(),
    lifespan: Type.Optional(Type.Integer()),
    geoRange: Type.String(),
    imageLink: Type.String(),
    diet: Type.String(),
    animalType: Type.Optional(Type.String()),
    habitatType: Type.Optional(Type.String()),
  },
  { additionalProperties: true }
);

export const userDTO = Type.Object(
  {
    email: Type.String(),
    name: Type.String(),
    password: Type.String(),
  },
  { additionalProperties: false }
);

export const userAnimalsDTO = Type.Object(
  {
    user: Type.Optional(Type.Array(userDTO)),
    animals: Type.Optional(Type.Array(animalDTO)),
  },
  { additionalProperties: false }
);

export type AnimalData = Static<typeof animalDTO>;
export type userData = Static<typeof userDTO>;
export type userAnimalData = Static<typeof userAnimalsDTO>;
