import React from "react";
import classes from "../../scss/navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <a href="about">ABOUT US</a>
        </li>
        <li>
          <a href="foryou">FOR YOU</a>
        </li>
        <li>
          <a href="services">SERVICES</a>
        </li>
        <li>
          <a href="blog">BLOG</a>
        </li>
        <li>
          <a href="vlog">VLOG</a>
        </li>
        <li>
          <a href="contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
