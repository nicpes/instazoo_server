import addFormats from "ajv-formats";
import { Validator, ValidationError } from "express-json-validator-middleware";

const validator = new Validator();

addFormats(validator.ajv, ["date-time"])
.addKeyword("kind")
.addKeyword("modifier")

export const validate = validator.validate;


export * from "./animal"