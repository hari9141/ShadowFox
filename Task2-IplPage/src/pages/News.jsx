import React from "react";
import { news } from "../model/news";

export default function News() {
  return (
    <div className="page-container">

      <section className="section">
        <h2 className="page-title">RCB News</h2>
        <p className="page-subtitle">
          Latest team news, announcements & match updates
        </p>
      </section>

      <section className="section news-section">
        <div className="news-grid">
          {news.map((item) => (
            <article key={item.id} className="news-card">
              <img src={item.img} alt={item.title} className="news-img" />

              <div className="news-body">
                <h3 className="news-title">{item.title}</h3>
                <p className="news-date">{item.date}</p>
                <p className="news-summary">{item.desc}</p>

                {item.url && (
                  <a href={item.url} target="_blank" rel="noreferrer" className="news-btn">
                    Read More →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
