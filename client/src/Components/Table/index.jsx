import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCarSide } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Table() {
  return (
    <>
      <h5
        style={{
          textAlign: "center",
          margin: "auto",
          padding: "30px"
        }}
        className="text-muted"
      >
        All Trips Summary{" "}
        <FontAwesomeIcon
          icon={faCarSide}
          style={{ color: "gray", fontSize: "25px" }}
        />
      </h5>
      <table className="table table-hover">
        <thead style={{ backgroundColor: "#2ECC71", color: "white" }}>
          <tr>
            <th scope="col" />
            <th scope="col">user</th>
            <th scope="col">gender</th>
            <th scope="col">user email</th>
            <th scope="col">driver</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              {" "}
              <Link to="/trips" className="nav-link">
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
            <td>Abetang</td>
            <td>Josph</td>
            <td>joeabetang@gmaill.com</td>
            <td>@Aubery Drake</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
