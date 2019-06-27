import React from "react";
import Listgroup from "../../Components/Listgroup";

export default function Drivers() {
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
        Drivers
      </h3>

      <Listgroup />
    </div>
  );
}
