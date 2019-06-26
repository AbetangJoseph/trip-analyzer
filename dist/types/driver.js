"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const date_fns_1 = require("date-fns");
const controllers_1 = require("../controllers");
const vehicle_1 = __importDefault(require("./vehicle"));
const DriverType = new graphql_1.GraphQLObjectType({
  name: "DriverType",
  description: "Describes a driver",
  fields: () => ({
    id: {
      type: graphql_1.GraphQLString,
      description: "The ID of the driver",
      resolve: data => data.driverID
    },
    name: {
      type: graphql_1.GraphQLString,
      description: "The name of the driver"
    },
    gender: {
      type: graphql_1.GraphQLString,
      description: "The gender of the driver"
    },
    agent: {
      type: graphql_1.GraphQLString,
      description: "The agent of the driver"
    },
    email: {
      type: graphql_1.GraphQLString,
      description: "The email of the driver"
    },
    phone: {
      type: graphql_1.GraphQLString,
      description: "The phone number of the driver"
    },
    dob: {
      type: graphql_1.GraphQLString,
      description: "The date of birth of the driver",
      resolve: data => date_fns_1.format(data.DOB)
    },
    address: {
      type: graphql_1.GraphQLString,
      description: "The address of the driver"
    },
    vehicles: {
      type: new graphql_1.GraphQLList(vehicle_1.default),
      description: "The vehicles of the driver",
      resolve: data => controllers_1.getVehiclesByIDs(data.vehicleID)
    }
  })
});
exports.default = DriverType;
//# sourceMappingURL=driver.js.map
