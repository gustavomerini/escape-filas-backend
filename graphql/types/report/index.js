export default `
  type Report {
    id: String!
    uid: String
    name: String!
    placeId: String!
    quantity: Int
  }
  type PlaceLine {
    placeName: String
    quantity: Int
    placeId: String
  }
  type Query {
    report(uid: String!): Report
    reports: [Report]
    placeLines: [PlaceLine]
    placeLine(placeId: String!): PlaceLine
  }
  type Mutation {
    addReport(name: String!, placeId: String!, quantity: Int!): Report
    editReport(id: String!, uid: String, name: String, placeId: String, quantity: Int): Report
    deleteReport(id: String, uid: String, name: String, placeId: String): Report
    addReportLocation(uid: String!, lat: String!, lng: String!): Report
    deleteAll: [Report]
  }
`;