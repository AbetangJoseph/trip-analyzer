import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Table() {
  const [trips, setTrips] = useState([]);

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

  return (
    <div className="container" style={{ height: "30rem", overflowY: "scroll" }}>
      <table className="table table-hover">
        <thead style={{ backgroundColor: "#2ECC71", color: "white" }}>
          <tr>
            <th scope="col" />
            <th scope="col">user</th>
            <th scope="col">email</th>
            <th scope="col">driver</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((element, id) => {
            return (
              <tr key={id}>
                <th scope="row">
                  {" "}
                  <Link to={`/trip/${element.tripID}`} className="nav-link">
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
                <td>{element.user.name}</td>
                <td>{element.user.gender}</td>
                <td>{element.user.phone} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
