import React, { useEffect, useState } from "react";
import NavBarFrontDesk from "../navigation/NavBarFrontDesk.js";

const Arrivals = () => {
  const [resID, setResID] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [pay, setPay] = useState([]);
  const [rms, setRms] = useState([]);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [cancel, setCancel] = useState(false);
  const [checkInOut, setCheckInOut] = useState(false);

  const [arrivals, setArrivals] = useState([]);

  const searchArrivals = async (date) => {
    console.log(date);
    try {
      const url = `http://127.0.0.1:5001/reservations/arrivals/${date}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      console.log(typeof data);
      setArrivals(data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchReservation = async (id) => {
    try {
      const url = `http://127.0.0.1:5001/reservations/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setResID(data[0].reservationID);
      setStart(data[0].startDate);
      setEnd(data[0].endDate);
      setRms(data[0].rooms);
      setFirst(data[0].firstName);
      setLast(data[0].lastName);
      setCancel(data[0].isCancelled);
      setCheckInOut(data[0].isCheckedIn);
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
      isCancelled: cancel,
      isCheckedIn: checkInOut,
    }),
  };

  const updateReservation = async () => {
    const url = `http://127.0.0.1:5001/reservations/${resID}/update`;
    const response = await fetch(url, requestOptionsUpdate);
    const data = await response.json();
    console.log(data);
  };

  const requestOptionsUpdateAndCheckIn = {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      startDate: start,
      endDate: end,
      rooms: rms,
      firstName: first,
      lastName: last,
      isCancelled: cancel,
      isCheckedIn: checkInOut,
    }),
  };

  const updateReservationAndCheckIn = async () => {
    const url = `http://127.0.0.1:5001/reservations/${resID}/update`;
    const response = await fetch(url, requestOptionsUpdateAndCheckIn);
    const data = await response.json();
    console.log(data);
  };

  const requestOptionsUpdateAndCancel = {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      startDate: start,
      endDate: end,
      rooms: rms,
      firstName: first,
      lastName: last,
      isCancelled: true,
      isCheckedIn: false,
    }),
  };

  const updateReservationAndCancel = async () => {
    const url = `http://127.0.0.1:5001/reservations/${resID}/update`;
    const response = await fetch(url, requestOptionsUpdateAndCancel);
    const data = await response.json();
    console.log(data);
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

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target);
    searchArrivals(start);
  };

  const handleResIDSearch = (event) => {
    event.preventDefault();
    searchReservation(event.target.innerText);
  };

  const submitUpdateReservation = (event) => {
    event.preventDefault();
    updateReservation();
  };

  const submitUpdateReservationAndCheckIn = (event) => {
    // setCheckInOut(true);
    event.preventDefault();
    updateReservationAndCheckIn();
  };

  const submitUpdateReservationAndCancel = (event) => {
    // setCancel(true);
    event.preventDefault();
    updateReservationAndCancel();
  };

  const arrivalList = arrivals.map((list, index) => {
    return (
      <tr className="row">
        <td className="col-md-2" onClick={handleResIDSearch}>
          {list.reservationID}
        </td>
        <td className="col-md-2">{list.startDate.substring(0, 10)}</td>
        <td className="col-md-2">{list.endDate.substring(0, 10)}</td>
        <td className="col-md-2">{list.rooms}</td>
        <td className="col-md-2">{list.firstName}</td>
        <td className="col-md-2">{list.lastName}</td>
      </tr>
    );
  });

  return (
    <div className="row">
      <div className="col-md-3">
        <NavBarFrontDesk />
      </div>
      <div className="col-md-9 content">
        <form className="row" onSubmit={handleSearch}>
          <label className="col-md-4">Search Arrival Date</label>
          <input className="col-md-6" onChange={handleStartChange}></input>
          <button className="col-md-2 btn" type="submit">
            Search
          </button>
        </form>
        <br />
        <br />
        <form>
          <div className="row">
            <label className="col-md-3">Reservation ID</label>
            <input className="col-md-9" value={resID}></input>
          </div>
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
            <div className="col-md-6"></div>
            <button
              type="button"
              onClick={submitUpdateReservationAndCheckIn}
              className="col-md-2 btn"
            >
              Check-In
            </button>
            <button
              type="button"
              onClick={submitUpdateReservation}
              className="col-md-2 btn"
            >
              Update
            </button>
            <button
              type="button"
              onClick={submitUpdateReservationAndCancel}
              className="col-md-2 btn"
            >
              Cancel
            </button>
          </div>
        </form>
        <br />
        <br />
        <tr className="row">
          <th className="col-md-2">ID</th>
          <th className="col-md-2">ARRIVAL</th>
          <th className="col-md-2">DEPARTURE</th>
          <th className="col-md-2">ROOM</th>
          <th className="col-md-2">FIRST NAME</th>
          <th className="col-md-2">LAST NAME</th>
        </tr>
        <>{arrivalList}</>
      </div>
    </div>
  );
};

export default Arrivals;
