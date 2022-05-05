import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBarFrontDesk.module.css";
import IMAGES from "../images/index.js";

const NavBarApp = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/arrivals"
            >
              <img
                className="leftNav"
                src={IMAGES["front_desk_arrivals"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/queue_reservations"
            >
              <img
                className="leftNav"
                src={IMAGES["front_desk_queue_reservations"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/inhouse-guests"
            >
              <img
                className="leftNav"
                src={IMAGES["front_desk_inhouse_guests"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/accounts"
            >
              <img
                className="leftNav"
                src={IMAGES["front_desk_accounts"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/room-assignment"
            >
              <img
                className="leftNav"
                src={IMAGES["front_desk_room_assignment"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/messages"
            >
              <img
                className="leftNav"
                src={IMAGES["front_desk_messages"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/traces"
            >
              <img
                className="leftNav"
                src={IMAGES["front_desk_traces"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/wakeup-calls"
            >
              <img
                className="leftNav"
                src={IMAGES["front_desk_wakeup_calls"]}
                alt=""
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarApp;
