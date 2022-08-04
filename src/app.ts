import express, { Express } from "express";
import animals from "./routes/animals";
import authRoutes from "./routes/auth";

import { validationErrorMiddleware } from "./lib/middleware/validation";
import { initSessionMiddleware } from "./lib/middleware/session";
import { passport } from "./lib/middleware/passport";
import { initCorsMiddleware } from "./lib/middleware/cors";

const app: Express = express();

app.use(initSessionMiddleware());
app.use(passport.initialize());
app.use(passport.session());

app.use(initCorsMiddleware());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/animals", animals);
app.use("/auth", authRoutes);
app.use(validationErrorMiddleware);

export default app;
