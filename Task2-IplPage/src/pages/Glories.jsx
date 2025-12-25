import React from "react";
import viratKohli from "../assets/glories/virat_kohli.jpg";
import abd from "../assets/glories/abd.jpg";
import gayle from "../assets/glories/gayle.jpg";
import faf from "../assets/glories/faf.jpg";
import gayle175 from "../assets/glories/gayle175.jpg";
import abd129 from "../assets/glories/abd129.jpg";
import kohli973 from "../assets/glories/kohli973.jpg";
import patidar112 from "../assets/glories/patidar112.jpg";

export default function Glories() {
  return (
    <div className="page-container">

      <section className="section">
        <h2 className="page-title" style={{ padding: "10px" }}>RCB Glories</h2>
        <p className="page-subtitle">Legends • Moments • History</p>
      </section>

      <section className="section">
        <h2 className="section-title fade-in-title" style={{ textAlign: "center", margin: "10px", padding: "10px" }}>Hall of Fame</h2>
        <div className="hof-grid">

          <div className="hof-card">
            <img src={viratKohli} alt="Virat" />
            <h3>Virat Kohli</h3>
            <p>Record 973 runs in the 2016 season.</p>
          </div>

          <div className="hof-card">
            <img src={abd} alt="ABD" />
            <h3>AB de Villiers</h3>
            <p>Mr. 360° — unforgettable innings.</p>
          </div>

          <div className="hof-card">
            <img src={gayle} alt="Gayle" />
            <h3>Chris Gayle</h3>
            <p>Legendary 175* T20 innings.</p>
          </div>

          <div className="hof-card">
            <img src={faf} alt="Faf" />
            <h3>Faf du Plessis</h3>
            <p>A bold leader who lifted team spirit.</p>
          </div>

        </div>
      </section>

      <section className="section" style={{ padding: "10px" }}>
        <h2 className="section-title fade-in-title" style={{ textAlign: "center", margin: "10px", padding: "10px" }}>Iconic Moments</h2>
        <div className="moments-grid">

          <div className="moment-card">
            <img src={gayle175} alt="gayle" />
            <div className="moment-overlay">
              <h3>Gayle 175*</h3>
              <p>2013 — Historic performance.</p>
            </div>
          </div>

          <div className="moment-card">
            <img src={abd129} alt="abd" />
            <div className="moment-overlay">
              <h3>ABD 129*</h3>
              <p>Masterclass in 360° hitting.</p>
            </div>
          </div>

          <div className="moment-card">
            <img src={kohli973} alt="kohli" />
            <div className="moment-overlay">
              <h3>Kohli 973</h3>
              <p>Record-breaking IPL season.</p>
            </div>
          </div>

          <div className="moment-card">
            <img src={patidar112} alt="patidar" />
            <div className="moment-overlay">
              <h3>Patidar 112*</h3>
              <p>Eliminator masterclass — 2022.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="section">
        <h2 className="section-title fade-in-title" style={{ textAlign: "center", margin: "10px", padding: "10px" }}>Timeline</h2>

        <div className="timeline" style={{ padding: "10px" }}>

          <div className="timeline-item">
            <div className="timeline-year">2009</div>
            <p>First IPL Final appearance.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2013</div>
            <p>Gayle 175* — explosive innings.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2016</div>
            <p>Kohli’s record 973 runs.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2022</div>
            <p>Patidar 112*, unforgettable match.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
