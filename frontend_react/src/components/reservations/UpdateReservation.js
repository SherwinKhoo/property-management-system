import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarReservations from "../navigation/NavBarReservations.js";

const UpdateReservation = () => {
  const [resID, setResID] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [rms, setRms] = useState([]);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  let navigate = useNavigate();

  const searchReservation = async (id) => {
    const url = `http://127.0.0.1:5001/reservations/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  const requestOptionsUpdate = {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      startDate: start,
      endDate: end,
      rooms: rms,
      firstName: first,
      lastName: last,
    }),
  };

  const updateReservation = async (id) => {
    const url = `http://127.0.0.1:5001/reservations/${id}/update`;
    const response = await fetch(url, requestOptionsUpdate);
    const data = await response.json();
    console.log(data);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchReservation(resID);
  };

  const submitUpdateReservation = (event) => {
    event.preventDefault();
    updateReservation();
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
      <form className="col-md-9 content" onSubmit={submitUpdateReservation}>
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
          <div className="col-md-6"></div>
          <button type="button" onclick={handleSearch} className="col-md-2 btn">
            Search
          </button>
          <button type="submit" className="col-md-2 btn">
            Update
          </button>
          <button type="button" className="col-md-2 btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReservation;
