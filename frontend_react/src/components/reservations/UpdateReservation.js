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
    setStart(data[0].startDate);
    setEnd(data[0].endDate);
    setRms(data[0].rooms);
    setFirst(data[0].firstName);
    setLast(data[0].lastName);
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

  const updateReservation = async () => {
    const url = `http://127.0.0.1:5001/reservations/${resID}/update`;
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

  const updateForm = () => {};

  return (
    <div className="row">
      <div className="col-md-3">
        <NavBarReservations />
      </div>
      <div className="col-md-9 content">
        <form className="row">
          <label className="col-md-3">Reservation ID</label>
          <input className="col-md-7" onChange={handleResIDChange}></input>
          <button className="col-md-2 btn" type="button" onClick={handleSearch}>
            Search
          </button>
        </form>
        <br />
        <form onSubmit={submitUpdateReservation}>
          <div className="row">
            <label className="col-md-3">Check-In Date</label>
            <input
              className="col-md-9"
              value={start}
              onChange={handleStartChange}
            ></input>
          </div>
          <div className="row">
            <label className="col-md-3">Check-Out Date</label>
            <input
              className="col-md-9"
              value={end}
              onChange={handleEndChange}
            ></input>
          </div>
          <div className="row">
            <label className="col-md-3">Rooms</label>
            <input
              className="col-md-9"
              defaultValue={rms}
              onChange={handleRmsChange}
            ></input>
          </div>
          <div className="row">
            <label className="col-md-3">First Name</label>
            <input
              className="col-md-9"
              defaultValue={first}
              onChange={handleFirstChange}
            ></input>
          </div>
          <div className="row">
            <label className="col-md-3">Last Name</label>
            <input
              className="col-md-9"
              defaultValue={last}
              onChange={handleLastChange}
            ></input>
          </div>
          <div className="row">
            <div className="col-md-8"></div>
            <button type="submit" className="col-md-2 btn">
              Update
            </button>
            <button type="button" className="col-md-2 btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReservation;
