/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Card from "../../Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import Chart from "../../Components/Chart";
import Table from "../../Components/Table";

export default function Dashboard() {
  const [chartState, setChartSate] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const statsCall = await fetch("http://localhost:3000/api/stats");
      let response = await statsCall.json();
      response = response.data;
      setChartSate(() => {
        return { ...response };
      });
    };
    fetchData();
  }, []);

  const {
    male,
    female,
    noOfCashTrips,
    noOfNonCashTrips,
    billedTotal,
    cashBilledTotal,
    nonCashBilledTotal
  } = chartState;

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
      <h5
        style={{
          textAlign: "center",
          margin: "auto",
          padding: "30px"
        }}
        className="text-muted"
      >
        Stats{" "}
        <FontAwesomeIcon
          icon={faChartLine}
          style={{ color: "gray", fontSize: "35px" }}
        />
      </h5>

      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px"
        }}
      >
        <Card
          cardTitle="Gender Analysis"
          cardBody={
            <Chart
              chartType="Pie"
              chartStateData={[male, female]}
              chartTitle="No. of Users"
              chartLabels={["male", "female"]}
            />
          }
        />
        <Card
          cardTitle="Cash Analysis"
          cardBody={
            <Chart
              chartType="Pie"
              chartStateData={[noOfCashTrips, noOfNonCashTrips]}
              chartTitle="Cash & Uncashed trips"
              chartLabels={["noOfCashTrips", "noOfNonCashTrips"]}
            />
          }
        />
        <Card
          cardTitle="Total Bill Analysis"
          cardBody={
            <Chart
              chartType="Bar"
              chartStateData={[
                billedTotal,
                cashBilledTotal,
                nonCashBilledTotal
              ]}
              chartTitle="Total Trips Billing"
              chartLabels={[
                "billedTotal",
                "cashBilledTotal",
                "nonCashBilledTotal"
              ]}
            />
          }
        />
      </div>
      <div className="container">
        <Table />
      </div>
    </div>
  );
}
