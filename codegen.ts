import { CodegenConfig } from "@graphql-codegen/cli";
import { BASE_URL } from "./consts";

const config: CodegenConfig = {
  schema: BASE_URL,
  documents: ["documents/**/*.graphql"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "generates/gql/": {
      preset: "client",
    },
  },
};

export default config;
