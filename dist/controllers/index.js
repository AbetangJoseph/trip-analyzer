"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drivers = require("../../data/drivers.json");
const trips = require("../../data/trips.json");
const vehicles = require("../../data/vehicles.json");
function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
function getTrips() {
  return trips;
}
exports.getTrips = getTrips;
function getDrivers() {
  return Object.values(drivers);
}
exports.getDrivers = getDrivers;
function getVehicles() {
  return vehicles;
}
exports.getVehicles = getVehicles;
function getVehiclesByIDs(vehicleIDs) {
  return vehicleIDs.map(vehicleID => {
    return getVehicle(vehicleID);
  });
}
exports.getVehiclesByIDs = getVehiclesByIDs;
function getTrip(tripID) {
  const trip = trips.filter(trip => trip.tripID === tripID);
  if (!trip.length) {
    throw new Error("Trip not found");
  }
  return trip;
}
exports.getTrip = getTrip;
function getDriver(driverID) {
  const driver = drivers[driverID];
  if (!driver) {
    throw new Error("Driver not found");
  }
  const profileNum = randomIntInc(1, 9);
  return Object.assign({}, driver, {
    photo: `https://randomuser.me/api/portraits/lego/${profileNum}.jpg`
  });
}
exports.getDriver = getDriver;
function getVehicle(vehicleID) {
  const vehicle = vehicles[vehicleID];
  if (!vehicle) {
    throw new Error("Vehicle not found");
  }
  return Object.assign({}, vehicle, { vehicleID });
}
exports.getVehicle = getVehicle;
//# sourceMappingURL=index.js.map
