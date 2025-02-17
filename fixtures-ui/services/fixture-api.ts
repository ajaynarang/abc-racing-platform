import { Fixture } from "@/types";
import { GraphQLClient } from "graphql-request";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/graphql";

const client = new GraphQLClient(API_BASE_URL);

export const fetchFixturesAPI = (): Promise<{ fixtures: Fixture[] }> => {
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
  return client.request(query);
};


