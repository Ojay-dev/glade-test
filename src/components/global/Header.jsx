import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import glade_logo from "../../assets/icons/glade_logo.png";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="header">
        <button
          className="header__sidebar-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            width="20"
            height="23"
            viewBox="0 0 20 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.4643 5.53564H0.535714C0.239866 5.53564 0 5.29578 0 4.99993V3.57136C0 3.27551 0.239866 3.03564 0.535714 3.03564H19.4643C19.7601 3.03564 20 3.27551 20 3.57136V4.99993C20 5.29578 19.7601 5.53564 19.4643 5.53564ZM19.4643 12.6785H0.535714C0.239866 12.6785 0 12.4386 0 12.1428V10.7142C0 10.4184 0.239866 10.1785 0.535714 10.1785H19.4643C19.7601 10.1785 20 10.4184 20 10.7142V12.1428C20 12.4386 19.7601 12.6785 19.4643 12.6785ZM19.4643 19.8214H0.535714C0.239866 19.8214 0 19.5815 0 19.2856V17.8571C0 17.5612 0.239866 17.3214 0.535714 17.3214H19.4643C19.7601 17.3214 20 17.5612 20 17.8571V19.2856C20 19.5815 19.7601 19.8214 19.4643 19.8214Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <Link to="/" className="d-block header__logo">
          <img src={glade_logo} alt="logo" className="header__logo-image" />
        </Link>

        <div
          className="d-flex align-items-center"
          style={{ paddingLeft: "1.5rem" }}
        >
          <div className="search">
            <form>
              <input
                aria-label="Search"
                autoComplete="off"
                spellCheck="false"
                className="search__input"
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
                style={
                  isFocused
                    ? {
                        cursor: "text",
                        width: "10rem",
                        border: "1px solid #cfd4db",
                      }
                    : null
                }
              />
            </form>
          </div>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list-item">
                <NavLink
                  to="/"
                  className="nav__list-link"
                  activeClassName="active"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink
                  to="/guide"
                  className="nav__list-link"
                  activeClassName="active"
                  exact
                >
                  Guide
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink
                  to="/"
                  className="nav__list-link"
                  activeClassName="active"
                  exact
                >
                  API REFERENCE
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink
                  to="/"
                  className="nav__list-link"
                  activeClassName="active"
                  exact
                >
                  SDKs & Plugins
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink
                  to="/"
                  className="nav__list-link"
                  activeClassName="active"
                  exact
                >
                  FAQS{" "}
                  <span style={{ marginLeft: 4 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      width="15"
                      height="15"
                      className="icon outbound"
                    >
                      <path
                        fill="#aaa"
                        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                      ></path>{" "}
                      <polygon
                        fill="#aaa"
                        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                      ></polygon>
                    </svg>{" "}
                    <span className="sr-only">(opens new window)</span>
                  </span>
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink
                  to="/"
                  className="nav__list-link"
                  activeClassName="active"
                  exact
                >
                  CONTACT US{" "}
                  <span style={{ marginLeft: 4 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      width="15"
                      height="15"
                      className="icon outbound"
                    >
                      <path
                        fill="#aaa"
                        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                      ></path>{" "}
                      <polygon
                        fill="#aaa"
                        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                      ></polygon>
                    </svg>{" "}
                    <span className="sr-only">(opens new window)</span>
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <MobileMenu {...{ showMenu, setShowMenu }} />
    </>
  );
}
