
import { mergeTypes } from "merge-graphql-schemas";

import Report from "./report/";
import placeLine from "./placeLine";

const typeDefs = [Report, placeLine];

export default mergeTypes(typeDefs, { all: true });