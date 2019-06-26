"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const types_1 = require("./types");
const controllers_1 = require("./controllers");
const query = new graphql_1.GraphQLObjectType({
  name: "Query",
  description: "The query root of Deca Rides.",
  fields: () => ({
    trips: {
      type: new graphql_1.GraphQLList(types_1.TripType),
      description: "All the trips",
      resolve: () => controllers_1.getTrips()
    },
    drivers: {
      type: new graphql_1.GraphQLList(types_1.DriverType),
      description: "All the drivers",
      resolve: () => controllers_1.getDrivers()
    },
    trip: {
      type: types_1.TripType,
      description: "Info about a single trip",
      args: {
        tripID: {
          type: graphql_1.GraphQLString,
          description: "The ID of the trip to fetch"
        }
      },
      resolve: (_, { tripID }) => {
        return controllers_1.getTrip(tripID);
      }
    },
    driver: {
      type: types_1.DriverType,
      description: "Info about a single driver",
      args: {
        driverID: {
          type: graphql_1.GraphQLString,
          description: "The ID of the driver to fetch"
        }
      },
      resolve: (_, { driverID }) => {
        return controllers_1.getDriver(driverID);
      }
    },
    vehicle: {
      type: types_1.VehicleType,
      description: "Info about a single vehicle",
      args: {
        vehicleID: {
          type: graphql_1.GraphQLString,
          description: "The ID of the vehicle to fetch"
        }
      },
      resolve: (_, { vehicleID }) => {
        return controllers_1.getVehicle(vehicleID);
      }
    }
  })
});
const schema = new graphql_1.GraphQLSchema({
  query
});
exports.default = schema;
//# sourceMappingURL=schema.js.map
