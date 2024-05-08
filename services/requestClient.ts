import { BASE_URL } from "@/consts";
import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(BASE_URL, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});
