import { mergeResolvers } from "merge-graphql-schemas";

import Report from "./Report/";

const resolvers = [Report];

export default mergeResolvers(resolvers);