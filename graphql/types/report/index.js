export default `
  type Report {
    id: String!
    name: String!
    placeId: String!
  }
  type Query {
    report(id: String!): Report
    reports: [Report]
  }
  type Mutation {
    addReport(id: String!, name: String!, placeId: String!): Report
    editReport(id: String, name: String, placeId: String): Report
    deleteReport(id: String, name: String, placeId: String): Report
  }
`;