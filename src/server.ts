import "dotenv/config";

import config from "./config";

import app from "./app";

const port = config.PORT;

console.log(config.GITHUB_CLIENT_ID);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
