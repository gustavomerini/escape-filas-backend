export default `
  type PlaceLine {
    placeName: String
    quantity: Int
    placeId: String
  }
  type Query {
    placeLines: [PlaceLine]
    placeLine(placeId: String!): PlaceLine
  }
`;