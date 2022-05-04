import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBarApp.module.css";
import IMAGES from "../images/index.js";

const NavBarApp = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/reservations"
            >
              <img className="topNav" src={IMAGES["nav_reservations"]} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/front-desk"
            >
              <img className="topNav" src={IMAGES["nav_front_desk"]} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/cashiering"
            >
              <img className="topNav" src={IMAGES["nav_cashiering"]} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/rooms-management"
            >
              <img
                className="topNav"
                src={IMAGES["nav_rooms_management"]}
                alt=""
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/end-of-day"
            >
              <img className="topNav" src={IMAGES["nav_end_of_day"]} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/exit"
            >
              <img className="topNav" src={IMAGES["nav_exit"]} alt="" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarApp;
