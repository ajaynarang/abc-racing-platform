import { buildSchema } from "graphql";
import { FixtureService } from "../services/fixture-service";

const fixtureService = new FixtureService();

export const schema = buildSchema(`
  type Fixture {
    id: String!
    raceName: String!
    date: String!
    circuit: String!
    location: String!
  }

  type Query {
    fixture(id: ID!): Fixture
    fixtures: [Fixture!]!
  }
`);

export const root = {
  fixture: async ({ id }: { id: string }) => {
    return await fixtureService.getFixtureById(id);
  },
  fixtures: async () => {
    return await fixtureService.getAllFixtures();
  },
};
