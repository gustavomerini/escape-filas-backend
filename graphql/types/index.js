
import { mergeTypes } from "merge-graphql-schemas";

import Report from "./report/";

const typeDefs = [Report];

export default mergeTypes(typeDefs, { all: true });