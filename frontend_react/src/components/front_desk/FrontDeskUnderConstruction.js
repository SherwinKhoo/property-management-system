import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarFrontDesk from "../navigation/NavBarFrontDesk.js";

const FrontDeskUnderConstruction = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <NavBarFrontDesk />
      </div>
      <div className="col-md-9 content">UNDER CONSTRUCTION</div>
    </div>
  );
};

export default FrontDeskUnderConstruction;
