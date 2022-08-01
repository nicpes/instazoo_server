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
    diet: Type.Optional(Type.String(DietDTO) || Type.Undefined()),
    animalType: Type.Optional(Type.String(AnimalTypeDTO) || Type.Undefined()),
    habitatType: Type.Optional(Type.String(HabitatTypeDTO) || Type.Undefined()),
  },
  { additionalProperties: false }
);

export type AnimalData = Static<typeof animalDTO>;
export type DietTypeData = Static<typeof DietDTO>;
export type AnimalTypeData = Static<typeof AnimalTypeDTO>;
export type HabitatTypeData = Static<typeof HabitatTypeDTO>;
