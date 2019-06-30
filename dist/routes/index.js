"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = express_1.Router();
router.get("/", function(_req, res, _next) {
  res.status(200).json({ message: "All is well" });
});
router.get("/trips", (_req, res) => {
  const trips = index_1.getTrips();
  res.status(200).json({ data: trips });
});
router.get("/trip/:tripID", (req, res) => {
  try {
    const data = index_1.getTrip(req.params.tripID);
    res.status(200).json({ data });
  } catch (_a) {
    res.status(404).json({ error: "Trip not found" });
  }
});
router.get("/drivers", (_req, res) => {
  const drivers = index_1.getDrivers();
  res.status(200).json({ data: drivers });
});
router.get("/driver/:driverID", (req, res) => {
  try {
    const driver = index_1.getDriver(req.params.driverID);
    res.status(200).json({ data: driver });
  } catch (_a) {
    res.status(404).json({ error: "Driver not found" });
  }
});
router.get("/vehicle/:vehicleID", (req, res) => {
  try {
    const vehicle = index_1.getVehicle(req.params.vehicleID);
    res.status(200).json({ data: vehicle });
  } catch (_a) {
    res.status(404).json({ error: "Vehicle not found" });
  }
});
router.get("/stats", (_req, res) => {
  res.status(200).json({
    data: {
      male: 30,
      female: 20,
      noOfCashTrips: 26,
      noOfNonCashTrips: 24,
      billedTotal: 128224.69,
      cashBilledTotal: 69043.8,
      nonCashBilledTotal: 59180.89
    }
  });
});
exports.default = router;
//# sourceMappingURL=index.js.map
