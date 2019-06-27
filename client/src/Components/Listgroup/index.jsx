import React from "react";

export default function Listgroup({ drivers, click }) {
  return (
    <ul className="list-group col-5">
      {drivers.map((driver, index) => {
        return (
          <li
            key={index}
            className="list-group-item"
            onClick={() => click(driver)}
          >
            {driver.name}
          </li>
        );
      })}
    </ul>
  );
}
