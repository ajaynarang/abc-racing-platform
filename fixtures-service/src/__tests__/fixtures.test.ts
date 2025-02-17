import request from "supertest";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema, root } from "../schema/schema";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: false,
  })
);

describe("Fixtures api", () => {
  it("should fetch all fixtures", async () => {
    const query = `
      query {
        fixtures {
          id
          raceName
          date
          circuit
          location
        }
      }
    `;
    const response = await request(app).post("/graphql").send({ query });
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data.fixtures)).toBe(true);
  });
});
