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
  const [cancel, setCancel] = useState(false);

  let navigate = useNavigate();

  const searchReservation = async (id) => {
    try {
      const url = `http://127.0.0.1:5001/reservations/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setStart(data[0].startDate);
      setEnd(data[0].endDate);
      setRms(data[0].rooms);
      setFirst(data[0].firstName);
      setLast(data[0].lastName);
      setCancel(data[0].isCancelled);
    } catch (error) {
      console.log(error);
    }
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
      isCancelled: false,
      isCheckedIn: false,
    }),
  };

  const updateReservation = async (id) => {
    try {
      const url = `http://127.0.0.1:5001/reservations/${id}/update`;
      const response = await fetch(url, requestOptionsUpdate);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const requestOptionsDelete = {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  };

  const deleteReservation = async (id) => {
    try {
      const url = `http://127.0.0.1:5001/reservations/${id}/delete`;
      const response = await fetch(url, requestOptionsDelete);
      const data = await response.json();
    } catch (error) {}
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchReservation(resID);
  };

  const submitUpdateReservation = (event) => {
    event.preventDefault();
    updateReservation(resID);
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

  const handleDelete = (event) => {
    event.preventDefault();
    deleteReservation(resID);
  };

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
        <br />
        <br />
        <form onSubmit={submitUpdateReservation}>
          <div className="row">
            <label className="col-md-3">Arrival</label>
            <input
              className="col-md-9"
              value={start.substring(0, 10)}
              onChange={handleStartChange}
            ></input>
          </div>
          <div className="row">
            <label className="col-md-3">Departure</label>
            <input
              className="col-md-9"
              value={end.substring(0, 10)}
              onChange={handleEndChange}
            ></input>
          </div>
          <div className="row">
            <label className="col-md-3">Rooms</label>
            <input
              className="col-md-9"
              value={rms}
              onChange={handleRmsChange}
            ></input>
          </div>
          <div className="row">
            <label className="col-md-3">First Name</label>
            <input
              className="col-md-9"
              value={first}
              onChange={handleFirstChange}
            ></input>
          </div>
          <div className="row">
            <label className="col-md-3">Last Name</label>
            <input
              className="col-md-9"
              value={last}
              onChange={handleLastChange}
            ></input>
          </div>
          <div className="row">
            <div className="col-md-8"></div>
            <button type="submit" className="col-md-2 btn">
              Update
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="col-md-2 btn"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReservation;
