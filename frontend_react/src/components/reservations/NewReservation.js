import React from "react";
import { useNavigate } from "react-router-dom";
import NavBarReservations from "../navigation/NavBarReservations.js";

const NewReservation = () => {
  return (
    <div className="row">
      <div className="col-md-2">
        <NavBarReservations />
      </div>
      <main className="col-md-10" style={{ background: "white" }}>
        something
      </main>
    </div>
  );
};

export default NewReservation;
