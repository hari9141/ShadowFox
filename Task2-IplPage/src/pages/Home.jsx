import React from "react";
import "../style.css";
import homeBanner from "../assets/banners/banner4.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">ROYAL CHALLENGERS BANGALORE</h1>
          <p className="hero-tagline">Ee Sala Cup Namde! 🔥</p>
          <p className="hero-tagline">#Mission2026</p>
          <Link to="/men" className="hero-btn">Meet the Squad</Link>
        </div>
      </section>

      <section className="quick-links-section">


        <div className="quick-links-grid">

          <Link to="/men" className="ql-card">
            <h3>RCB Men Squad</h3>
            <p>Explore player profiles, stats, and match highlights.</p>
          </Link>

          <Link to="/women" className="ql-card">
            <h3>RCB Women Squad</h3>
            <p>Meet the warriors leading the WPL charge.</p>
          </Link>

          <Link to="/gallery" className="ql-card">
            <h3>Gallery</h3>
            <p>Moments around the team</p>
          </Link>

          <Link to="/glories" className="ql-card">
            <h3>Glories</h3>
            <p>Historic moments and Hall of Fame.</p>
          </Link>
        </div>
      </section>

    </div>
  );
}
