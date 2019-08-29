import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";

const Table = ({ history }) => {
  const [trips, setTrips] = useState([]);
  const [drivers, setDrivers] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      const statsCall = await fetch("api/trips");
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
            <th scope="col">view</th>
            <th scope="col">no</th>
            <th scope="col">user</th>
            <th scope="col">gender</th>
            <th scope="col">billedAmount</th>
            <th scope="col">driver</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, index) => {
            const driverName = driverObj[trip.driverID]
              ? driverObj[trip.driverID].name
              : null;

            return (
              <tr
                key={trip.tripID}
                onClick={() => {
                  history.push(`/trip/${trip.tripID}`);
                }}
                style={{ cursor: "pointer" }}
              >
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
                <td>{index + 1}</td>
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
};

export default withRouter(Table);
