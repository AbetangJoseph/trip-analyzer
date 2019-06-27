import React from "react";

export default function Trips({ trips }) {
  return (
    <div style={{ margin: "15px" }}>
      <h3
        style={{
          textAlign: "center",
          margin: "auto",
          color: "#2ECC71",
          padding: "30px"
        }}
      >
        Trips
      </h3>

      <div>
        <li>trips.user.name</li>
        <li>trips.user.gender</li>
        <li>trips.user.phone</li>
      </div>
    </div>
  );
}
