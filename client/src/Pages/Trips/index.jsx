/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import ListItem from "../../Components/ListItem";
import { Link } from "react-router-dom";

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

  const displayListItem = () => {
    return (
      <ul className="list-group list-group-flush">
        <ListItem title="user " listBody={trip.user ? trip.user.name : null} />
        <ListItem
          title="billed Amount "
          listBody={trip.user ? `N ${trip.billedAmount}` : null}
        />
        <ListItem
          title="trip Date "
          listBody={trip.user ? trip.created : null}
        />
        <ListItem title="paid cash? " listBody={trip.isCash ? "Yes" : "No"} />
        <ListItem
          title="email "
          listBody={trip.user ? trip.user.email : null}
        />
        <ListItem title="phone" listBody={trip.user ? trip.user.phone : null} />
        <ListItem
          title="company "
          listBody={trip.user ? trip.user.company : null}
        />
        <ListItem
          title="pickup "
          listBody={trip.user ? trip.pickup.address : null}
        />
        <ListItem
          title="destination "
          listBody={trip.user ? trip.destination.address : null}
        />{" "}
        <ListItem title="trip Id " listBody={trip.user ? trip.tripID : null} />{" "}
        <ListItem
          title="driver Id "
          listBody={trip.user ? trip.driverID : null}
        />
      </ul>
    );
  };

  return (
    <div style={{ margin: "15px" }}>
      <h4
        style={{
          textAlign: "center",
          margin: "auto",
          color: "#2ECC71",
          padding: "30px"
        }}
      >
        Trip Details
      </h4>

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
          cardTitle={
            <Link to="/" style={{ color: "#2ECC71" }}>
              Back
            </Link>
          }
          cardBody={displayListItem()}
          cardWidth="col-sm-8"
        />
      </div>
    </div>
  );
}
