import cors from "cors";

export const initCorsMiddleware = () => {
  const corsOptions = {
    origin: "http://localhost:3000",
  };

  return cors(corsOptions);
};
