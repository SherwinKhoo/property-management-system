import React, { Suspense } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import NavBarReservations from "../navigation/NavBarReservations.js";

// const NewReservation = React.lazy(() => import("./NewReservation"));

const ReservationsContainer = () => {
  return (
    <div className="row">
      <div className="col-md-2">
        <NavBarReservations />
      </div>
      <main className="col-md-10">
        {/* <Suspense fallback={<p>loading...</p>}>
          <Routes>
            <Route
              path="/"
              element={<Navigate replace to="new-reservation" />}
            />
            <Route path="/new-reservation" element={<NewReservation />} />
          </Routes>
        </Suspense> */}
      </main>
      {/* <<div className="col-md-2 left">
        img
          className="leftNav"
          src={IMAGES["reservations_new_reservation"]}
          alt=""
        />
        <img
          className="leftNav"
          src={IMAGES["reservations_update_reservation"]}
          alt=""
        />
        <img className="leftNav" src={IMAGES["reservations_blocks"]} alt="" />
        <img className="leftNav" src={IMAGES["reservations_profiles"]} alt="" />
        <img
          className="leftNav"
          src={IMAGES["reservations_room_plan"]}
          alt=""
        />
        <img
          className="leftNav"
          src={IMAGES["reservations_floor_plan"]}
          alt=""
        />
        <img
          className="leftNav"
          src={IMAGES["reservations_confirmation"]}
          alt=""
        />
        <img
          className="leftNav"
          src={IMAGES["reservations_registration_cards"]}
          alt=""
        />
        <img className="leftNav" src={IMAGES["reservations_calendar"]} alt="" /> */}
    </div>
  );
};

export default ReservationsContainer;
