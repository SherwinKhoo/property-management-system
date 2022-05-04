import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBarReservations.module.css";
import IMAGES from "../images/index.js";

const NavBarReservations = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/new-reservation"
            >
              <img
                className="leftNav"
                src={IMAGES["reservations_new_reservation"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/update-reservation"
            >
              <img
                className="leftNav"
                src={IMAGES["reservations_update_reservation"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/blocks"
            >
              <img
                className="leftNav"
                src={IMAGES["reservations_blocks"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/profiles"
            >
              <img
                className="leftNav"
                src={IMAGES["reservations_profiles"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/room-plan"
            >
              <img
                className="leftNav"
                src={IMAGES["reservations_room_plan"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/floor-plan"
            >
              <img
                className="leftNav"
                src={IMAGES["reservations_floor_plan"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/confirmation"
            >
              <img
                className="leftNav"
                src={IMAGES["reservations_confirmation"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/registration_cards"
            >
              <img
                className="leftNav"
                src={IMAGES["reservations_registration_cards"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/calendar"
            >
              <img
                className="leftNav"
                src={IMAGES["reservations_calendar"]}
                alt=""
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarReservations;
