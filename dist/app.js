"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const index_1 = __importDefault(require("./routes/index"));
const schema_1 = __importDefault(require("./schema"));
const app = express_1.default();
// Setup Request logging
const logFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";
app.use(
  morgan_1.default(logFormat, {
    skip: function(_req, res) {
      return res.statusCode < 400;
    },
    stream: process.stderr
  })
);
app.use(
  morgan_1.default(logFormat, {
    skip: function(_req, res) {
      return res.statusCode >= 400;
    },
    stream: process.stdout
  })
);
app.disable("x-powered-by");
app.use(compression_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use("/api", index_1.default);
app.use(
  "/graphql",
  express_graphql_1.default({
    schema: schema_1.default,
    graphiql: true
  })
);
// catch 404 and forward to error handler
app.use(function(_req, _res, next) {
  next(http_errors_1.default(404));
});
// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
exports.default = app;
//# sourceMappingURL=app.js.map
