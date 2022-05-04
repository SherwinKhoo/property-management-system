import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarReservations from "../navigation/NavBarReservations.js";

const NewReservation = (props) => {
  const [resID, setResID] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [rms, setRms] = useState([]);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  let navigate = useNavigate();

  const requestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      reservationID: resID,
      startDate: start,
      endDate: end,
      rooms: rms,
      firstName: first,
      lastName: last,
    }),
  };

  const newReservation = async () => {
    const url = `http://127.0.0.1:5001/reservations/new`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);
  };

  const submitNewReservation = (event) => {
    event.preventDefault();
    newReservation();
  };

  const handleResIDChange = (event) => {
    setResID(event.target.value);
  };

  const handleStartChange = (event) => {
    setStart(event.target.value);
  };

  const handleEndChange = (event) => {
    setEnd(event.target.value);
  };

  const handleRmsChange = (event) => {
    setRms([event.target.value]);
  };

  const handleFirstChange = (event) => {
    setFirst(event.target.value);
  };

  const handleLastChange = (event) => {
    setLast(event.target.value);
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <NavBarReservations />
      </div>
      <form className="col-md-9 content" onSubmit={submitNewReservation}>
        <div className="row">
          <label className="col-md-3">Reservation ID</label>
          <input className="col-md-9" onChange={handleResIDChange}></input>
        </div>
        <div className="row">
          <label className="col-md-3">Check-In Date</label>
          <input className="col-md-9" onChange={handleStartChange}></input>
        </div>
        <div className="row">
          <label className="col-md-3">Check-Out Date</label>
          <input className="col-md-9" onChange={handleEndChange}></input>
        </div>
        <div className="row">
          <label className="col-md-3">Rooms</label>
          <input className="col-md-9" onChange={handleRmsChange}></input>
        </div>
        <div className="row">
          <label className="col-md-3">First Name</label>
          <input className="col-md-9" onChange={handleFirstChange}></input>
        </div>
        <div className="row">
          <label className="col-md-3">Last Name</label>
          <input className="col-md-9" onChange={handleLastChange}></input>
        </div>
        <div className="row">
          <div className="col-md-8"></div>
          <button type="submit" className="col-md-2 btn">
            Submit
          </button>
          <button type="button" className="col-md-2 btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewReservation;
