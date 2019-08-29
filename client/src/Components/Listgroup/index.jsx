import React from "react";

export default function Listgroup({ drivers, click, active }) {
  return (
    <ul className="list-group">
      {drivers.map(driver => {
        return (
          <li
            style={{ cursor: "pointer" }}
            key={driver.driverID}
            className={`list-group-item ${
              active === driver.driverID ? "active" : null
            }`}
            onClick={() => click(driver)}
          >
            <span style={{ fontSize: "14px" }}>{driver.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
