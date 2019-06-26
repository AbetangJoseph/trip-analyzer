import React from "react";
import Card from "../../Components/Card";

export default function Dashboard() {
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
        Dashboard
      </h3>
      <div className="row">
        <Card cardTitle="Gender Analysis" />
        <Card cardTitle="Cash Analysis" />
        <Card cardTitle="Total Bill Analysis" />
      </div>
    </div>
  );
}
