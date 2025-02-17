import compression from "compression";
import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import helmet from "helmet";
import morgan from "morgan";
import { logger } from "./config/logger";
import { errorHandler } from "./middleware/errorHandler";
import fixturesRouter from "./routes/fixtures";
import { root, schema } from "./schema/schema";

import "dotenv/config"; 


const app = express();
const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV === "development";

// middlewares
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: isDev ? ["'self'", "'unsafe-inline'", "'unsafe-eval'"] : ["'self'"],
      },
    },
  })
);
app.use(cors());
app.use(compression());
app.use(morgan("combined"));
//


//api
app.use("/api/fixtures", fixturesRouter);
//gql-bff layer
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: isDev,
  })
);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use(errorHandler);
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
  logger.info(`Api running at http://localhost:${port}/api/fixtures`);
  logger.info(`GraphQL available at http://localhost:${port}/graphql`);
});
