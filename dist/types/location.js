"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const LocationType = new graphql_1.GraphQLObjectType({
  name: "LocationType",
  description: "Describes the location of an event",
  fields: () => ({
    address: {
      type: graphql_1.GraphQLString,
      description: "The address of the event"
    },
    latitude: {
      type: graphql_1.GraphQLFloat,
      description: "The latitude of the coordinate"
    },
    longitude: {
      type: graphql_1.GraphQLFloat,
      description: "The longitude of the coordinate"
    }
  })
});
exports.default = LocationType;
//# sourceMappingURL=location.js.map
