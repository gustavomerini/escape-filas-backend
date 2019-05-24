import { mergeResolvers } from "merge-graphql-schemas";

import Report from "./report/";
import placeLine from "./placeLine";

const resolvers = [Report, placeLine];

export default mergeResolvers(resolvers);