"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const UserType = new graphql_1.GraphQLObjectType({
  name: "UserType",
  description: "Information about a user",
  fields: () => ({
    name: {
      type: graphql_1.GraphQLString,
      description: "The name of the user"
    },
    gender: {
      type: graphql_1.GraphQLString,
      description: "The gender of the user"
    },
    company: {
      type: graphql_1.GraphQLString,
      description: "The company of the user"
    },
    email: {
      type: graphql_1.GraphQLString,
      description: "The email of the user"
    },
    phone: {
      type: graphql_1.GraphQLString,
      description: "The phone of the user"
    }
  })
});
exports.default = UserType;
//# sourceMappingURL=user.js.map
