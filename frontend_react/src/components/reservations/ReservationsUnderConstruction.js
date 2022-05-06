import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarReservations from "../navigation/NavBarReservations.js";

const ReservationsUnderConstruction = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <NavBarReservations />
      </div>
      <div className="col-md-9 content">UNDER CONSTRUCTION</div>
    </div>
  );
};

export default ReservationsUnderConstruction;
