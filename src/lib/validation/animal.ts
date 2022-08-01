import { Static, Type } from "@sinclair/typebox";

export const animalDTO = Type.Object(
  {
    name: Type.String(),
    activeTime: Type.String(),
    lenghtMin: Type.Integer(),
    lenghtMax: Type.Integer(),
    weightMin: Type.Integer(),
    weightMax: Type.Integer(),
    lifespan: Type.Integer(),
    geoRange: Type.String(),
    imageLink: Type.String(),
    diet: Type.String(),
    animalType: Type.String(),
    habitatType: Type.String(),
  },
  { additionalProperties: false }
);

export type AnimalData = Static<typeof animalDTO>;
