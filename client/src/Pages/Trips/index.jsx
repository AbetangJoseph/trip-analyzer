/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

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
        Trips
      </h3>

      <div>
        <li>User: {trip.user ? trip.user.name : null}</li>
        <li>Billed Amount: {trip.billedAmount}</li>
        <li>Trip Date: {trip.created}</li>
        <li>isCash? :{trip.isCash ? "True" : "Talse"}</li>
        <li>Email: {trip.user ? trip.user.email : null}</li>
        <li>Phone: {trip.user ? trip.user.phone : null}</li>
        <li>{trip.user ? trip.user.company : null}</li>
        <li>Pickup: {trip.user ? trip.pickup.address : null}</li>
        <li>Destination: {trip.user ? trip.destination.address : null}</li>
        <li>Trip Id: {trip.user ? trip.tripID : null}</li>
        <li>Driver Id: {trip.user ? trip.driverID : null}</li>
      </div>
    </div>
  );
}
