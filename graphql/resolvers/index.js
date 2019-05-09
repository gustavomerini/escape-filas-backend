import { mergeResolvers } from "merge-graphql-schemas";

import Report from "./report/";

const resolvers = [Report];

export default mergeResolvers(resolvers);