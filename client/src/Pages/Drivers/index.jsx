import React, { useState, useEffect } from "react";
import Listgroup from "../../Components/Listgroup";
import Card from "../../Components/Card";
import { driverDetails } from "./fixtures";

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState([]);

  useEffect(() => {
    const getDrivers = async () => {
      const fetchDrivers = await fetch("/api/drivers");
      const driversResponse = await fetchDrivers.json();
      let drivers = driversResponse;
      setDrivers(drivers.data);
      setDriver(drivers.data[0]);
    };
    getDrivers();
  }, []);

  const changeContent = driver => {
    setDriver(driver);
  };

  return (
    <div style={{ margin: "15px" }}>
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          padding: "30px"
        }}
      >
        <h4 style={{ color: "#2ECC71" }}>Drivers</h4>
      </div>

      <div className="row">
        <div className="col-4" style={{ padding: "0px" }}>
          <Listgroup
            drivers={drivers}
            click={changeContent}
            active={driver.driverID}
          />
        </div>

        <div className="col-8">
          <Card
            cardWidth="col-sm-12"
            cardTitle={driver["name"]}
            cardBody={
              <div>
                {driverDetails.map((driverInfo, index) => (
                  <p key={index}>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      {`${driverInfo.key}:`}
                    </span>{" "}
                    <span style={{ fontSize: "14px" }}>
                      {driver[driverInfo.value]}
                    </span>
                  </p>
                ))}
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
