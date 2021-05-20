import React, { useState } from "react";
import { Link } from "react-router-dom";
import cardpayment_95347720 from "../../assets/gifs/cardpayment.95347720.gif";
import GuideSidebar from "../../components/pages/GuideSidebar";

export function GuideView() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <main className="guide">
      <GuideSidebar {...{ showMenu, setShowMenu }} />
      <section className="content">
        <div className="content__body">
          <h1 id="guide">
            <Link to="#guide" className="header-anchor">
              #
            </Link>
            Guide
          </h1>

          <h2 id="account-setup">
            <Link to="#account-setup" className="header-anchor">
              #
            </Link>
            Account Setup
          </h2>

          <h3 id="test-accounts">
            <Link to="#test-accounts" className="header-anchor">
              #
            </Link>
            Test Accounts
          </h3>

          <ul>
            <li>
              Test API Credentials
              <br /> <code>Merchant ID: GP0000001</code>
              <br /> <code>Merchant Key: 123456789</code>
            </li>
          </ul>

          <h3 id="live-accounts">
            <Link to="#live-accounts" className="header-anchor">
              #
            </Link>
            Live Accounts
          </h3>

          <ul>
            <li>
              Sign up for a live account here:{" "}
              <a
                href="https://glade.ng"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://glade.ng
                <span>
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
                    ></path>
                    <polygon
                      fill="#aaa"
                      points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                    ></polygon>
                  </svg>
                  <span className="sr-only">(opens new window)</span>
                </span>
              </a>{" "}
              You can start accepting realtime payments with your live account.
              Create one now. Your API Credentials are in{" "}
              <em>
                <code>Merchant Credentials</code>
              </em>{" "}
              on the dashboard.
            </li>
          </ul>

          <div className="custom-block warning">
            <p className="custom-block-title">NOTE</p>
            <p>Your Merchant Key should not be shared with a third party.</p>
          </div>

          <h2 id="the-interface">
            <a href="#the-interface" className="header-anchor">
              #
            </a>
            The Interface
          </h2>

          <p>
            <img src={cardpayment_95347720} alt="The Interface" />
          </p>

          <h2 id="prerequisites-requirements">
            <a href="#prerequisites-requirements" className="header-anchor">
              #
            </a>{" "}
            Prerequisites / Requirements
          </h2>

          <p>Pass the following with the header request made to the endpoint</p>

          <ol>
            <li>
              <p>
                Check our{" "}
                <a
                  href="http://glade.ng/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  acceptable use policy
                  <span>
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
                </a>{" "}
                if you have any questions about your business and its
                acceptability please send an email to{" "}
                <a href="mailto:support@glade.ng">support@glade.ng</a>. The team
                is available to provide feedback on any inquiry.
              </p>
            </li>{" "}
            <li>
              <p>
                Get familiar with our API by reading these pages in the API
                Overview section: Introduction, Payment Collection and Money
                Transfer.
              </p>
            </li>
          </ol>

          <div className="custom-block tip">
            <p className="custom-block-title">NOTE</p>{" "}
            <p>
              You need to provide a business CAC Certificate or National
              Identification (International Passport, Driving Licence, or
              National Identity Card) and then fill all the required details for
              your account to be activated and ready to receive payment.
            </p>
          </div>

          <h3 id="https-requirements">
            <a href="#https-requirements" className="header-anchor">
              #
            </a>{" "}
            HTTPS requirements
          </h3>
          <p>
            All requests to using the Checkout are made via a secure HTTPS
            connection. However, in order to protect yourself from certain forms
            of man-in-the-middle attacks, you must serve the page containing the
            payment form over HTTPS. e.g https://yourdomain.com/paymentpage
          </p>
          <p>
            If you are not familiar with setting up SSL certificates follow this
            guide to setup on a free SSL certificate your server to enable a
            secure HTTPS connection.
          </p>

          <h2 id="glade-inline-checkout">
            <a href="#glade-inline-checkout" className="header-anchor">
              #
            </a>{" "}
            Glade Inline Checkout
          </h2>
          <div className="custom-block warning">
            <p className="custom-block-title">NOTE</p>{" "}
            <p>
              We recommend you don't cache the script in your project to avoid
              breaking changes when an update is introduced.
            </p>
          </div>

          <p>
            <strong>Live Inline Script</strong>
          </p>
        </div>
      </section>
    </main>
  );
}
