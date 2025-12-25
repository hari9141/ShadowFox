import React from "react";

export default function RCBTV() {
  const videos = [
    {
      id: 1,
      title: "Mr. Nags Gatecrashes RCB’s IPL 2025 Trophy Celebrations",
      desc: "Mr Nags gets a little emotional, but carries his humour along, as he gatecrashes into the field of play, after last night’s incredible win.",
      url: "https://youtu.be/pRVYKdpfDl8?si=fu8gzhnX4bNw8oPA",
      thumbnail: "https://img.youtube.com/vi/pRVYKdpfDl8/maxresdefault.jpg"
    },
    {
      id: 2,
      title: "Dressing Room celebration -Ft. Virat Kohli",
      desc: "“I’m going to feel the real side of it when we get to Bengaluru tomorrow and celebrate this with the city” - Virat Kohli ❤️🙌 ",
      url: "https://youtu.be/WZPY3xVedQc?si=pErH67CVmbDcoI3Z",
      thumbnail: "https://img.youtube.com/vi/WZPY3xVedQc/sddefault.jpg"
    },
    {
      id: 3,
      title: "Rajat Patidar: The RCB captain who turned dreams into destiny | IPL 2025",
      desc: "Rajat Patidar’s captaincy - fueled by belief, lit by hope and conquered by will. ❤️‍🔥 ",
      url: "https://youtu.be/vJj8t45Lthg?si=GJ-Xl_PDpdYs5HRM",
      thumbnail: "https://img.youtube.com/vi/vJj8t45Lthg/maxresdefault.jpg"
    }
  ];

  return (
    <div>
      <section className="section">
        <h2 style={{ textAlign: "center", padding: "10px", fontSize: "42px" }}>RCB TV</h2>
        <p style={{ textAlign: "center", color: "#d4af37", fontSize: "18px" }}>
          Exclusive videos, behind-the-scenes, interviews & match moments.
        </p>
      </section>

      <section className="section">
        <div className="gallery-grid">
          {videos.map((v) => (
            <div key={v.id} className="gallery-card" style={{ paddingBottom: "10px" }}>
              <a href={v.url} target="_blank" rel="noreferrer">
                <img src={v.thumbnail} alt={v.title} />
              </a>
              <div style={{ padding: "14px" }}>
                <h3 style={{ color: "#d4af37", marginBottom: "6px" }}>{v.title}</h3>
                <p style={{ color: "#ccc", fontSize: "14px" }}>{v.desc}</p>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ marginTop: "10px", display: "inline-block" }}
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
