/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";

export default function Trips(props) {
  const [trip, setTrip] = useState({});

  const {
    match: { params }
  } = props;

  useEffect(() => {
    const fetchUsers = async () => {
      const statsCall = await fetch(`/api/trip/${params.id}`);
      let response = await statsCall.json();

      setTrip(response.data[0]);
    };
    fetchUsers();
  }, []);

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
        Trip
      </h3>

      <div />

      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px"
        }}
      >
        <Card
          cardTitle="Trip info"
          cardBody={
            <div>
              <li>
                <b>User: </b>
                {trip.user ? trip.user.name : null}
              </li>
              <li>
                <b>Billed Amount: </b>
                {trip.billedAmount}
              </li>
              <li>
                <b>Trip Date: </b>
                {trip.created}
              </li>
              <li>
                <b>Cash?: </b>
                {trip.isCash ? "Yes" : "No"}
              </li>
              <li>
                <b>Email: </b>
                {trip.user ? trip.user.email : null}
              </li>
              <li>
                <b>Phone: </b>
                {trip.user ? trip.user.phone : null}
              </li>
              <li>
                <b>Company: </b>
                {trip.user ? trip.user.company : null}
              </li>
              <li>
                <b>Pickup: </b>
                {trip.user ? trip.pickup.address : null}
              </li>
              <li>
                <b>Destination: </b>
                {trip.user ? trip.destination.address : null}
              </li>
              <li>
                <b>Trip Id: </b>
                {trip.user ? trip.tripID : null}
              </li>
              <li>
                <b>Driver Id: </b>
                {trip.user ? trip.driverID : null}
              </li>
            </div>
          }
          cardWidth="col-sm-8"
        />
      </div>
    </div>
  );
}
