import React from "react";
// import { NavHashLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

function GuideSidebar({ setShowMenu }) {
  return (
    <section className="sidebar">
      <p className="sidebar__heading">
        <span>Guide</span>
      </p>

      <nav>
        <ul className="sidebar__nav-item">
          <li className="sidebar__nav-list">
            <NavHashLink
              to="#account-setup"
              className="sidebar__nav-link"
              activeClassName="active"
              exact
              onClick={() => setShowMenu(false)}
            >
              Account Setup
            </NavHashLink>

            <ul>
              <li className="sidebar__submenu-list">
                <NavHashLink
                  to="#test-accounts"
                  className="sidebar__submenu-link"
                  activeClassName="active"
                  onClick={() => setShowMenu(false)}
                >
                  Test Accounts
                </NavHashLink>
              </li>
              <li className="sidebar__submenu-list">
                <NavHashLink
                  to="#live-accounts"
                  className="sidebar__submenu-link"
                  onClick={() => setShowMenu(false)}
                >
                  Live Accounts
                </NavHashLink>
              </li>
              <li className="sidebar__submenu-list">
                <NavHashLink
                  to="#using-the-glade-payment-services"
                  className="sidebar__submenu-link"
                  onClick={() => setShowMenu(false)}
                >
                  Using the Glade Payment Services
                </NavHashLink>
              </li>
            </ul>
          </li>

          <li className="sidebar__nav-list">
            <NavHashLink
              to="#the-interface"
              className="sidebar__nav-link"
              activeClassName="active"
              exact
              onClick={() => setShowMenu(false)}
            >
              The Interface
            </NavHashLink>
          </li>

          <li className="sidebar__nav-list">
            <NavHashLink
              to="#prerequisites-requirements"
              className="sidebar__nav-link"
              activeClassName="active"
              exact
              onClick={() => setShowMenu(false)}
            >
              Prerequisites / Requirements
            </NavHashLink>

            <ul>
              <li className="sidebar__submenu-list">
                <NavHashLink
                  to="#https-requirements"
                  className="sidebar__submenu-link"
                  onClick={() => setShowMenu(false)}
                >
                  HTTPS requirements
                </NavHashLink>
              </li>
            </ul>
          </li>

          <li className="sidebar__nav-list">
            <NavHashLink
              to="#glade-inline-checkout"
              className="sidebar__nav-link"
              activeClassName="active"
              exact
              onClick={() => setShowMenu(false)}
            >
              Glade Inline Checkout
            </NavHashLink>

            <ul>
              <li className="sidebar__submenu-list">
                <NavHashLink
                  to="#embed-parameters"
                  className="sidebar__submenu-link"
                  onClick={() => setShowMenu(false)}
                >
                  Embed Parameters
                </NavHashLink>
              </li>
              <li className="sidebar__submenu-list">
                <NavHashLink
                  to="#recurring-payment"
                  className="sidebar__submenu-link"
                  onClick={() => setShowMenu(false)}
                >
                  Recurring Payment
                </NavHashLink>
              </li>

              <li className="sidebar__submenu-list">
                <NavHashLink
                  to="#installment-payment"
                  className="sidebar__submenu-link"
                  onClick={() => setShowMenu(false)}
                >
                  Installment Payment
                </NavHashLink>
              </li>

              <li className="sidebar__submenu-list">
                <NavHashLink
                  to="#split-payment"
                  className="sidebar__submenu-link"
                  onClick={() => setShowMenu(false)}
                >
                  Split Payment
                </NavHashLink>
              </li>
            </ul>
          </li>

          <li className="sidebar__nav-list">
            <NavHashLink
              to="#verify-transactions"
              className="sidebar__nav-link"
              activeClassName="active"
              exact
              onClick={() => setShowMenu(false)}
            >
              Verify Transaction
            </NavHashLink>
          </li>

          <li className="sidebar__nav-list">
            <NavHashLink
              to="#refund-transactions"
              className="sidebar__nav-link"
              activeClassName="active"
              exact
              onClick={() => setShowMenu(false)}
            >
              Refund Transaction
            </NavHashLink>
          </li>

          <li className="sidebar__nav-list">
            <NavHashLink
              to="#disputes"
              className="sidebar__nav-link"
              activeClassName="active"
              exact
              onClick={() => setShowMenu(false)}
            >
              Disputes
            </NavHashLink>
          </li>

          <li className="sidebar__nav-list">
            <NavHashLink
              to="#settlements"
              className="sidebar__nav-link"
              activeClassName="active"
              exact
              onClick={() => setShowMenu(false)}
            >
              Settlements
            </NavHashLink>
          </li>

          <li className="sidebar__nav-list">
            <NavHashLink
              to="#questions"
              className="sidebar__nav-link"
              activeClassName="active"
              exact
              onClick={() => setShowMenu(false)}
            >
              Questions
            </NavHashLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default GuideSidebar;
