import { Static, Type } from "@sinclair/typebox";

export const DietDTO = Type.Object({
  diet: Type.String(),
});
export const AnimalTypeDTO = Type.Object({
  type: Type.String(),
});
export const HabitatTypeDTO = Type.Object({
  habitat: Type.String(),
});

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
    diet: Type.Optional(Type.Array(DietDTO)),
    animalType: Type.Optional(Type.Array(AnimalTypeDTO)),
    habitatType: Type.Optional(Type.Array(HabitatTypeDTO)),
  },
  { additionalProperties: false }
);

export type AnimalData = Static<typeof animalDTO>;
export type DietTypeData = Static<typeof DietDTO>;
export type AnimalTypeData = Static<typeof AnimalTypeDTO>;
export type HabitatTypeData = Static<typeof HabitatTypeDTO>;
