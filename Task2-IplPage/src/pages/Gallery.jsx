import React from "react";
import { gallery } from "../model/gallery";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h1 className="gallery-title-large">Hall of Visuals</h1>
          <p className="gallery-subtitle">A collection of glory, passion, and pride.</p>
        </div>
      </section>

      <section className="section" style={{ padding: '40px 5%' }}>
        <div className="gallery-creative-grid">
          {gallery.map((item, idx) => (
            <div
              key={item.id || idx}
              className="gallery-card-creative"
              onClick={() => setSelectedImage(item.img)}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <img src={item.img} alt={`gallery-${idx}`} className="gallery-poster" />
              <div className="gallery-overlay">
                <span className="gallery-icon">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage} alt="Full View" className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
}
