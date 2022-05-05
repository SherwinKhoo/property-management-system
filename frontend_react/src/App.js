import React, { Suspense } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import NavBarApp from "./components/navigation/NavBarApp";

// import Reservations from "./components/reservations/Reservations";
// import NewReservation from "./components/reservations/NewReservation";
// import UpdateReservation from "./components/reservations/UpdateReservation";
// import FrontDesk from "./components/front_desk/FrontDesk";
// import InHouseGuests from "./components/front_desk/InHouseGuests";

const Reservations = React.lazy(() =>
  import("./components/reservations/Reservations")
);
const NewReservation = React.lazy(() =>
  import("./components/reservations/NewReservation")
);
const UpdateReservation = React.lazy(() =>
  import("./components/reservations/UpdateReservation")
);
const FrontDesk = React.lazy(() => import("./components/front_desk/FrontDesk"));
const Arrivals = React.lazy(() => import("./components/front_desk/Arrivals"));
const InHouseGuests = React.lazy(() =>
  import("./components/front_desk/InHouseGuests")
);

const App = () => {
  let navigate = useNavigate();

  return (
    <div className="container">
      <NavBarApp />
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<Navigate replace to="reservations" />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/new-reservation" element={<NewReservation />} />
          <Route path="/update-reservation" element={<UpdateReservation />} />
          <Route path="/front-desk" element={<FrontDesk />} />
          <Route path="/arrivals" element={<Arrivals />} />
          <Route path="/inhouse-guests" element={<InHouseGuests />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
