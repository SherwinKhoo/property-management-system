import React, { Suspense } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";

import NavBarApp from "./components/navigation/NavBarApp";
import NewReservation from "./components/reservations/NewReservation";

const ReservationsContainer = React.lazy(() =>
  import("./components/reservations/ReservationsContainer")
);
const NewReservations = React.lazy(() =>
  import("./components/reservations/NewReservation")
);

const App = () => {
  let navigate = useNavigate();

  return (
    <div className="container">
      <NavBarApp />
      <main>
        <Suspense fallback={<p>loading...</p>}>
          <Routes>
            <Route path="/" element={<Navigate replace to="reservations" />} />
            <Route path="/reservations" element={<ReservationsContainer />} />
            <Route path="/new-reservation" element={<NewReservation />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
