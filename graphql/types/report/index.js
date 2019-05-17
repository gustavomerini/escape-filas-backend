export default `
  type Report {
    uid: String!
    name: String!
    placeId: String!
  }
  type Query {
    report(uid: String!): Report
    reports: [Report]
  }
  type Mutation {
    addReport(uid: String!, name: String!, placeId: String!): Report
    editReport(uid: String!, name: String, placeId: String): Report
    deleteReport(uid: String!, name: String, placeId: String): Report
    addReportLocation(uid: String!, lat: String!, lng: String!): Report
    deleteAll: [Report]
  }
`;