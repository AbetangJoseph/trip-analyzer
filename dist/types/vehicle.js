"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const date_fns_1 = require("date-fns");
const VehicleType = new graphql_1.GraphQLObjectType({
  name: "VehicleType",
  description: "The vehicle of the driver",
  fields: () => ({
    id: {
      type: graphql_1.GraphQLString,
      description: "The ID of the vehicle",
      resolve: data => data.vehicleID
    },
    manufacturer: {
      type: graphql_1.GraphQLString,
      description: "The manufacturer of the vehicle"
    },
    plate: {
      type: graphql_1.GraphQLString,
      description: "The manufacturer of the vehicle"
    },
    acquired: {
      type: graphql_1.GraphQLString,
      description: "The date the vehicle was purchased",
      resolve: data => date_fns_1.format(data.acquired)
    },
    acquiredNew: {
      type: graphql_1.GraphQLBoolean,
      description: "Whether or not the vehicle is a new one"
    }
  })
});
exports.default = VehicleType;
//# sourceMappingURL=vehicle.js.map
