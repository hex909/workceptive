import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import gsap from "gsap";

function Navbar({ setIsModel, isModel }) {
  const [isBurger, setIsBurger] = useState(false);
  const header = useRef(null);

  function scroller() {
    header.current.classList.toggle("sticky", window.scrollY > 200);
  }

  useEffect(() => {
    window.addEventListener("scroll", scroller);

    return () => {
      window.removeEventListener("scroll", scroller);
    };
  }, []);

  useEffect(() => {
    let from = gsap.from(".navbar-brand span", {
      x: -25,
      duration: 1,
      opacity: 0.5,
      immediateRender: false,
    });

    return () => {
      from.kill();
    };
  }, []);

  useEffect(() => {
    setIsBurger(false);
  }, [isModel]);

  return (
    <header ref={header}>
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/" className="navbar-brand">
            <img src="/image/logo-only.png" alt="logo image" />
            <span>Workceptive</span>
          </Link>

          <a className="navbar-burger" onClick={() => setIsBurger((e) => !e)}>
            {!isBurger ? <FiMenu /> : <IoCloseSharp />}
          </a>
        </div>

        <div className={`navbar__menu ${isBurger ? "is-active" : ""}`}>
          <NavLink
            to="/"
            className="navbar__item"
            onClick={() => setIsBurger((e) => !e)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="navbar__item"
            onClick={() => {
              setIsBurger((e) => !e);
            }}
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className="navbar__item"
            onClick={() => {
              setIsBurger((e) => !e);
            }}
          >
            Contact
          </NavLink>
          <button className="nav-btn" onClick={() => setIsModel((e) => !e)}>
            Request call back
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
