import React from "react";
import NavBarReservations from "../navigation/NavBarReservations.js";

const Reservations = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <NavBarReservations />
      </div>
      <main className="col-md-9"></main>
    </div>
  );
};

export default Reservations;
