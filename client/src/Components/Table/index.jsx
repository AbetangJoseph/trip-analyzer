import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Trips from "../../Pages/Trips";

export default function Table() {
  const [trips, setTrips] = useState([]);
  const [drivers, setDrivers] = useState({});
  // const [driversFilterd, setDriversFilterd] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      const statsCall = await fetch("http://localhost:3000/api/trips");
      let response = await statsCall.json();
      setTrips(() => {
        return response.data;
      });
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchDrivers = async () => {
      const driverCall = await fetch("api/drivers");
      let drivers = await driverCall.json();
      setDrivers(() => {
        return drivers.data;
      });
    };

    fetchDrivers();
  }, []);

  const driverObj = {};

  for (let driver in drivers) {
    driverObj[drivers[driver].driverID] = {
      name: drivers[driver].name,
      gender: drivers[driver].gender
    };
  }

  return (
    <div className="container" style={{ height: "30rem", overflowY: "scroll" }}>
      <table className="table table-hover">
        <thead style={{ backgroundColor: "#2ECC71", color: "white" }}>
          <tr>
            <th scope="col" />
            <th scope="col">user</th>
            <th scope="col">gender</th>
            <th scope="col">billedAmount</th>
            <th scope="col">driver</th>
          </tr>
        </thead>
        <tbody>
          {trips.map(trip => {
            const driverName = driverObj[trip.driverID]
              ? driverObj[trip.driverID].name
              : null;

            return (
              <tr key={trip.tripID}>
                <th scope="row">
                  {" "}
                  <Link to={`/trip/${trip.tripID}`} className="nav-link">
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      style={{
                        color: "#2ECC71",
                        fontSize: "25px",
                        cursor: "pointer"
                      }}
                    />
                  </Link>
                </th>
                <td>{trip.user.name}</td>
                <td>{trip.user.gender}</td>
                <td>{`N ${trip.billedAmount}`}</td>
                <td>{driverName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
