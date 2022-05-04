import React, { Suspense } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";

import NavBarApp from "./components/navigation/NavBarApp";
// import ReservationsContainer from "./components/reservations/ReservationsContainer";
// import NewReservation from "./components/reservations/NewReservation";
// import UpdateReservation from "./components/reservations/UpdateReservation";
const ReservationsContainer = React.lazy(() =>
  import("./components/reservations/ReservationsContainer")
);
const NewReservation = React.lazy(() =>
  import("./components/reservations/NewReservation")
);
const UpdateReservation = React.lazy(() =>
  import("./components/reservations/UpdateReservation")
);

const App = () => {
  let navigate = useNavigate();

  return (
    <div className="container">
      <NavBarApp />
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<Navigate replace to="reservations" />} />
          <Route path="/reservations" element={<ReservationsContainer />} />
          <Route path="/new-reservation" element={<NewReservation />} />
          <Route path="/update-reservation" element={<UpdateReservation />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
