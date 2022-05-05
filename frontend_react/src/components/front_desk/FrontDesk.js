import React from "react";
import NavBarFrontDesk from "../navigation/NavBarFrontDesk.js";

const FrontDesk = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <NavBarFrontDesk />
      </div>
      <main className="col-md-9"></main>
    </div>
  );
};

export default FrontDesk;
