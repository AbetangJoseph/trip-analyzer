/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Listgroup from "../../Components/Listgroup";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSteering} from '@fortawesome/free-solid-svg-icons';
import Card from "../../Components/Card";

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
        <h3 style={{ color: "#2ECC71", marginBottom: "70px" }}>Drivers</h3>
        <h5
          className="text-muted"
          style={{ color: "#2ECC71", marginTop: "30px" }}
        >
          DecaDriver Details
          {/* <FontAwesomeIcon
            icon={faSteering}
            style={{ color: 'gray', fontSize: '25px' }}
          /> */}
        </h5>
      </div>

      <div className="row" style={{ display: "flex" }}>
        <Card cardTitle={driver.name} cardBody={driver.email} />
        <Listgroup drivers={drivers} click={changeContent} />
      </div>
    </div>
  );
}
