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
const user_1 = __importDefault(require("./user"));
const driver_1 = __importDefault(require("./driver"));
const location_1 = __importDefault(require("./location"));
const TripType = new graphql_1.GraphQLObjectType({
  name: "Trip",
  description: "Information about a single trip",
  fields: () => ({
    id: {
      type: graphql_1.GraphQLString,
      description: "The ID of the trip",
      resolve: data => data.tripID
    },
    driver: {
      type: driver_1.default,
      description: "Info about the driver that took this trip",
      resolve: data => controllers_1.getDriver(data.driverID)
    },
    user: {
      type: user_1.default,
      description: "Info about the user that took this trip"
    },
    isCash: {
      type: graphql_1.GraphQLBoolean,
      description: "Whether or not the trip was paid for in cash"
    },
    billedAmount: {
      type: graphql_1.GraphQLFloat,
      description: "The amount that was paid for this trip",
      resolve: data => normalizeAmount(data.billedAmount)
    },
    created: {
      type: graphql_1.GraphQLString,
      description: "The date the trip was created",
      resolve: data => date_fns_1.format(data.created)
    },
    pickup: {
      type: location_1.default,
      description: "Info about where this trip started"
    },
    destination: {
      type: location_1.default,
      description: "Info about where this trip ended"
    }
  })
});
function normalizeAmount(amount) {
  if (typeof amount === "string") {
    return Number(amount.replace(",", ""));
  }
  return Number(amount);
}
exports.default = TripType;
//# sourceMappingURL=trip.js.map
