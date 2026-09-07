/* oxlint-disable next/no-img-element -- Local reference artwork in a static export. */
'use client';

import { Header, Sections } from './sections';

const contact = 'https://spade.com/contact/';
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <img src="/assets/padlock-icon.svg" alt="" />
              Risk & Authorization
            </div>
            <h1>
              Confidence in
              <br />
              every
              <br />
              authorization
            </h1>
            <p>
              Spade enriches every transaction with real-time merchant and
              location context, so you can verify legitimacy in under 50
              milliseconds.
            </p>
            <a className="button" href={contact}>
              Contact sales
            </a>
          </div>
          <div className="hero-art">
            <span className="coordinate top">
              “LONGITUDE”:
              <br />
              “INDUSTRY”:
            </span>
            <img
              src="/assets/risk-authorization-masthead-layer-2.png"
              alt="An open padlock formed from merchant data contour lines"
            />
            <span className="coordinate bottom">
              “ADDRESS”: “550 WAVERLEY ST”
              <br />
              “CITY”: “PALO ALTO, CA”
              <br />
              “COUNTRY”: “US”
              <br />
              “LATITUDE”: “37.44”
            </span>
          </div>
        </section>
        <Sections />
      </main>
    </>
  );
}
