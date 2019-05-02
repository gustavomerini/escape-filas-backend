
import { mergeTypes } from "merge-graphql-schemas";

import Report from "./Report/";

const typeDefs = [Report];

export default mergeTypes(typeDefs, { all: true });