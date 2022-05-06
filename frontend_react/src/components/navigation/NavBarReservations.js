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
              to="/reservations-under-construction"
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
              to="/reservations-under-construction"
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
              to="/reservations-under-construction"
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
              to="/reservations-under-construction"
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
              to="/reservations-under-construction"
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
              to="/reservations-under-construction"
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
              to="/reservations-under-construction"
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
